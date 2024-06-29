(function () {
  'use strict';
  angular.module('Steven angular app', [])
  .controller('InsertName', function functionName($scope) {
    $scope.devName = 'Steven Simoni'
    $scope.sayHI = function hello() {
      return 'Hello World!';
      }
    $scope.nameInput = ''
  }); //End of Contoller -- InsertName --

})(); //Close Tag of the IIFE
