(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchOrder = "";
  $scope.LunchCheckMessage = "";

  $scope.LunchCheckClick = function () {
  var  arrayOfStrings = $scope.lunchOrder.split(',');

      if (arrayOfStrings.length >= 4) {
      var msg = "Too much!";
        }
    else if (arrayOfStrings.length <= 3 && arrayOfStrings.length >=1 && $scope.lunchOrder != "") {
      var msg = "Enjoy!";
        }
    else  {
      var msg = "Please enter data first";
        }
      $scope.LunchCheckMessage = msg;
      console.log(arrayOfStrings.length);
      };

}

})();
