(function () {
    'use strict'

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListService', ShoppingListService)
    
    AlreadyBoughtController.$inject['ShoppingListService']
    function AlreadyBoughtController(ShoppingListService) {
         var boughtItems= this;

        boughtItems.bought = ShoppingListService.getBought()
        
       boughtItems.emptyList = function () {
            return boughtItems.bought.length === 0;
        }
        
        boughtItems.isEmpty = function () {
            return boughtItems.emptyList()? "Nothing bought yet." : ""
        }
            
    };

       
   ToBuyController.$inject['ShoppingListService']
    function ToBuyController(ShoppingListService) {
        var buyList = this;

        buyList.shoppingList = ShoppingListService.getItems()

        buyList.buyItem = function (itemIndex) {
            ShoppingListService.buyItem(itemIndex)
        }

        buyList.emptyList = function () {
            return buyList.shoppingList.length === 0;
        }
        
        buyList.isEmpty = function () {
            return buyList.emptyList()? "Everything is bought!" : ""
        }
    };

    function ShoppingListService() {
            var service = this;

            // List of Shoping items
            var shoppingList = [
                {
                    name: "Fish",
                    quantity: "200"
                },
                {
                    name: "Apples",
                    quantity: "100"
                },
                {
                    name: "Onions",
                    quantity: "50"
                },
                {
                    name: "Motton",
                    quantity: "300"
                },
                {
                    name: "Veal",
                    quantity: "1200"
                }
            ]
            
            // List of bought items
            var bought = []  
            
            service.buyItem = function (itemIndex) {
                var item = shoppingList.splice(itemIndex, 1)[0];
               bought.push(item)
            }
            
            service.getItems = function () {
                return shoppingList;
            };
            
            service.getBought = function () {
                return bought;
            };
    }; 

})();