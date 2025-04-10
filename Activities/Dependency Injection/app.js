(function () {
    'use strict'

    angular.module('DIApp', [])

    .controller('DIController', function ($scope, $filter) {
        $scope.name = 'Steven'

        $scope.upper  = function () {
            var upCase = $filter('uppercase')  //Actual function to Uppercase
            $scope.name = upCase($scope.name)
        }
    })



})();