(function() {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', lunchChecker);

    lunchChecker.$inject = ['$scope'];

    function lunchChecker($scope) {

      $scope.foodMessage = '';
      $scope.foodInputs = '';
      // When 'Check if Too Much' button is Clicked
      $scope.countItems = function () {
        const word = $scope.foodInputs.split(',');      //Calculating number of Commas
        document.querySelector('#messageField').style.color = 'green';      //Changing message colour to green (success)
        document.querySelector('#lunch-menu').style.borderColor = 'green';     //Changing border colour to green(success)

          if ($scope.foodInputs.length === 0) {      //When there is no user input
              $scope.foodMessage = 'Please enter data first';
              document.querySelector('#messageField').style.color = 'red';           //Changing message color to red (error)
              document.querySelector('#lunch-menu').style.borderColor = 'red';        //Changing the border colour to red (error)


            } else if (word.length <= 3){      //When there are less three or less commas
                $scope.foodMessage = 'Enjoy!';
              } else {      //When more than three commas present
                  $scope.foodMessage = 'Too Much!'

                }      //end of Else condition

      }      //End of Count Items function

      $scope.tryAgain = function () {      //This function reset the effects of countitems function on blurring the mouse
        document.querySelector('#lunch-menu').style.borderColor = ''; //Reseting Border color
        $scope.foodMessage = '';      //Deletes the message
                }

  } //End of parent cunction (Lunch Checker)

}()); //End of IIFE
