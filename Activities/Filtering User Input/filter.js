(function() {
  'use strict';
  angular.module('Filtering User Input', [])
  .controller('filterData', filter);

  function filter($scope, $filter) {
    $scope.fname = '';
    $scope.mname = '';
    $scope.lname = '';
    $scope.addrname = '';
    $scope.courname = '';

    $scope.upper = function () {
      var upCase = $filter('uppercase');
      $scope.fname = upCase($scope.fname);
      $scope.mname = upCase($scope.mname);
      $scope.lname = upCase($scope.lname);
      $scope.addrname = upCase($scope.addrname);
      $scope.courname = upCase($scope.courname);
    };

  }

}()); //End of the IIFE
