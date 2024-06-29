(function() {
  'use strict';
  angular.module('interpolating images', [])
  .controller('dontLough', tryChallenge);

  tryChallenge.$inject = ['$scope'];

  function tryChallenge($scope) {
    $scope.language = 'html'

    $scope.learnjs = function () {
      $scope.language = 'javascript'
    }
  };



}());
