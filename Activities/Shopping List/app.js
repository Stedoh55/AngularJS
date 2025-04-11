(function () {

    'use strict'

    var shoppingList1 = [
        "Milk", "Donuts", "Cookie", "Chapati", "Maandazi", "Kachori",
        "Mihogo", "Bagia"
    ]

    var shoppingList2 = [
        {
            name: "Kuku",
            quantity: "200"
        },
        {
            name: "Samaki",
            quantity: "100"
        },
        {
            name: "Utumbo",
            quantity: "50"
        },
        {
            name: "Nyama",
            quantity: "300"
        },
        {
            name: "Firigisi",
            quantity: "1200"
        }
    ]

    angular.module('ShoppingList', [])
    .controller('shoppingListController',shoppingListController)
    
    shoppingListController.$inject = ['$scope']

    function shoppingListController($scope) {
        $scope.shoppingList1 = shoppingList1
        $scope.shoppingList2 = shoppingList2
       

        $scope.addItem = function () {
            var newItem = {
                name: $scope.newItemName,
                quantity: $scope.newItemQuantity
            }
        // Concatenating the item to the Shopping List  
        $scope.shoppingList2.push(newItem)
        }
    }

    
})();