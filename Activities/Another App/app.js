(function () {
    'use strict'
    
    angular.module('AnotherApp', [])
        
    .controller('MyFirstController', function($scope) {
        $scope.first_name = 'Steven'
        $scope.last_name = 'Simoni'
        $scope.date = '10th April, 2025'
    })

})();