"use strict";
var app = angular.module("aaHelper", ['ngMaterial', 'ngMessages']);

app.controller('AppCtrl', ['$scope', '$http','$mdToast',
    function($scope, $http, $mdToast) {
        $scope.use_two_columns = false;
        $scope.use_image_tags = false;
        $scope.dashboard_code = '';
        $scope.meta = '';
        $scope.warning = false;

        //try to get meta from localstorage
        if (typeof(Storage) !== "undefined" && localStorage.getItem('meta') !== null) {
            $scope.meta = localStorage.getItem('meta');
        }else {
            $scope.meta = '{\n' +
                ' "icons": [\n' +
                '   { "name": "apple-homepod", "author": "[@arallsopp](https://github.com/arallsopp)"},\n' +
                '   { "name": "delete-alert", "author": "[@idevo89](https://github.com/idevo89)"}\n' +
                '  ]\n' +
                '}';
        }

        $scope.icons = [];
        $scope.read_meta = function(){
            let json;
            try {
                json = JSON.parse($scope.meta);
                $scope.icons = json.icons;

                //sort the icons
                $scope.icons.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

                //create the markdown header
                $scope.md = '| Icon | Name | Author |';
                if($scope.use_two_columns){
                    $scope.md += ' | Icon | Name | Author |\n| :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n';
                }else{
                    $scope.md += '\n| :--- | :--- | :--- \n';
                }

                // create the lovelace dash code header:
                $scope.dashboard_code = '    - type: custom:auto-entities\n' +
                    '      card:\n' +
                    '        type: entities\n' +
                    '        title: Test Custom icons\n' +
                    '        state_color: true\n' +
                    '      filter:\n' +
                    '        template: |\n' +
                    '          [{% for i in [';

                let row_counter = 0,
                    entities = [];

                angular.forEach($scope.icons, function (icon) {
                    row_counter += 1;
                    console.log('processing ', icon);

                    //generate row for the markdown table
                    if($scope.use_image_tags) {
                        $scope.md += '| <img src="https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/' + icon.name + '.svg" width="24px"/> | ' + icon.name + ' | ' + icon.author + ' |';
                    }else{
                        $scope.md += '| ![cil:' + icon.name + '](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/' + icon.name + '.svg)| ' + icon.name + ' | ' + icon.author + ' |';
                    }
                    if (row_counter > 1 || (!$scope.use_two_columns)) {
                        // this is the end of the row;
                        $scope.md += '\n';
                        row_counter = 0;
                    } else {
                        $scope.md += ' ';
                    }
                });

                //now generate the dash entries 
                let icon_list = $scope.icons.map(function (icon) {
                    return "'" + icon.name + "'";
                }).join(',');

                $scope.dashboard_code += icon_list;
                $scope.dashboard_code += '] %}\n' +
                    '               {{\n' +
                    '                { \'entity\':\'input_boolean.test\',\n' +
                    '                  \'icon\': \'cil:\' + i,\n' +
                    '                  \'name\': i\n' +
                    '                }\n' +
                    '              }},\n' +
                    '          {% endfor %}]';
                localStorage.setItem('meta',$scope.meta);
                $scope.warning = false;
            }catch (e){
                $scope.icons = {};
                $scope.warning = 'Could not read JSON. Check syntax';
                $scope.md = $scope.warning;
                $scope.dashboard_code = $scope.warning;


            }
        }

        $scope.get_from_repo = function(){
            $http({
                method: 'GET',
                url: '../json/custom-icons.json'
            }).then(function successCallback(response) {
                $scope.meta = JSON.stringify(response.data,null,2);
                $scope.read_meta();
                $scope.showToast('Imported JSON from repo');
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $scope.showToast('Could not import JSON from repo');
            });
        }

        $scope.copyToClipboard = function (content,msg) {
            let copyElement = document.createElement("textarea");
            copyElement.style.position = 'fixed';
            copyElement.style.opacity = '0';
            copyElement.textContent =  (content);

            let body = document.getElementsByTagName('body')[0];
            body.appendChild(copyElement);
            copyElement.select();
            document.execCommand('copy');
            body.removeChild(copyElement);

            $scope.showToast(typeof (msg)==="undefined" ? 'Copied to clipboard' : msg);
        }

        $scope.showToast = function(message){
            $mdToast.show(
                $mdToast.simple()
                    .textContent(message)
                    .hideDelay(3000))
                .then(function() {
                    // Toast dismissed.
                }).catch(function() {
                    //toast failed or got closed over
            });
        }
        $scope.read_meta();
    }
]);


