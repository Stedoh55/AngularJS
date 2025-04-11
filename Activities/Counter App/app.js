(function () {
    
    'use strict'

    angular.module('CounterApp', [])

    .controller('CounterController', CounterController);
    
    CounterController.$inject = ['$scope', '$timeout'];

    function CounterController($scope, $timeout) {
        $scope.counter = 0
        
        // $scope.upCounterRegular = function () {
        //     setTimeout(() => {
        //         $scope.$apply(function () {
        //             $scope.counter++;
        //             console.log('Counter Incremented')
        //         });
               
        //     }, 2000);
        // }


        // Alternative (Using native Timeout Function)
            $scope.upCounter = function () {
            $timeout(function () {
                $scope.counter++;
                console.log('Counter Incremented')
            }, 2000)
        }

        
    }
      
})();