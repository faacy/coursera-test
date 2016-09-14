(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchMenu = "";
  $scope.message = "";
  $scope.error = false;

  $scope.checkIfTooMuch = function () {
    if ($scope.lunchMenu === "") {
      $scope.message = "Please enter data first";
      $scope.error = true;
      return;
    }
    var items = $scope.lunchMenu.split(",");
    // remove empty items
    for (var i = items.length - 1; i >= 0; i--) {
      if (items[i].trim() === "") {
        items.splice(i, 1);
      }
    }
    if ( items.length <= 0) {
      $scope.message = "Please enter data first";
      $scope.error = true;
    } else if (items.length <= 3) {
      $scope.message = "Enjoy!";
      $scope.error = false;
    } else {
      $scope.message = "Too much!";
      $scope.error = false;
    }
  };


}

})();
