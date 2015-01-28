var app = angular.module('directiveWorkshop', ['myDirectives']);

app.controller('mainCtrl', function($scope, mainService){

$scope.buttonVisible = 'true';

$scope.getData = function () {
        return mainService.getData($scope.query).then(function (data) {
           console.log(data);
           return $scope.data = data;
        });
    };

});