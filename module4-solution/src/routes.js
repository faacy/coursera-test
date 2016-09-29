(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider
  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menulist/templates/home.template.html'
  })
  // Categories list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menulist/templates/categories.template.html',
    contoller: 'CategoriesController as categoriesCtrl',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
      //[{short_name: 'L', name: 'Lunch'}, {short_name: 'D', name: 'Dinner'}]
    }
  });

  // // Items list page
  // .state('categories.items', {
  //   url: '{categoryId}/items',
  //   templateUrl: 'src/menulist/templates/items.template.html',
  //   controller: 'CategoryItemsListController as categoryItemsList',
  //   // params: {
  //   //   itemId: null
  //   // }
  // });

}

})();
