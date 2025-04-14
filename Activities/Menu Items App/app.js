(function () {
    'use strict'

    angular.module('MenuItemsApp', [])
        .controller('MenuCategoriesController', MenuCategoriesController)
        .service('MenuCategoriesService', MenuCategoriesService)
        .constant('ApiBasePath', "http://127.0.0.1:8000");
    
    
   
    
    MenuCategoriesController.$inject = ['MenuCategoriesService'];
    function MenuCategoriesController(MenuCategoriesService) {
        var menu = this;

        var promise = MenuCategoriesService.getMenuCategories();

        promise.then(function (response) {
            console.log("Success", response);
            menu.categories = response.data.results;
        })
        .catch(function (error) {
            console.log("Something went terribly wrong.");
        });

        menu.logMenuItems = function (shortName) {
            var promise = MenuCategoriesService.getMenuForCategory(id);

            promise.then(function (response) {
            console.log(response.data);
            })
            .catch(function (error) {
            console.log(error);
            })
        };

    }


    MenuCategoriesService.$inject = ['$http', 'ApiBasePath'];
    function MenuCategoriesService($http, ApiBasePath) {
        var service = this;

        service.getMenuCategories = function () {
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/menu-items")
            });

            return response;
        };


        service.getMenuForCategory = function (shortName) {
            var response = $http.get({
                method: "GET",
                url: (ApiBasePath + "/menu-items/id"),
                params: {
                    category: shortName
                }
            });

            return response;
        };

    }

})();


var app = angular.module('myApp', [])

