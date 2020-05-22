(function () {
'use strict';

angular.module('Ass1', [])
.controller('Task1', function ($scope) {
   $scope.chkFood = function(){
    if(!$scope.name)
    {
      $scope.dispMsg = "Please enter data first";
    }
      else
      {
      var inputWord = $scope.name;
      var words = inputWord.split(',');
      var totalWords = words.length;

      if(totalWords <= 3 && totalWords > 0)
      {
        $scope.dispMsg = "Enjoy!";
      }
      else
      {
        $scope.dispMsg = "Too Much!";
      }
    }
  }
});

})();