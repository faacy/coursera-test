(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
    templateUrl: 'src/menulist/templates/categoriescomponent.template.html',
    // contoller: CategoriesComponentController,
    bindings: {
      items: '<'
    }
});

// CategoriesComponentController.$inject = ['$rootScope'];
// function CategoriesComponentController($rootScope) {
//   // var $ctrl = this;
//   // var cancellers = [];
//   //
//   // cancel = $rootScope.$on('$stateChangeError',
//   // function(event, toState, toParams, fromState, fromParams, error){
//   //   console.log(error);
//   // });
//   // cancellers.push(cancel);
//   //
//   // $ctrl.$onDestroy = function () {
//   //   cancellers.forEach(function (item) {
//   //     item();
//   //   });
//   // };
// }

})();
