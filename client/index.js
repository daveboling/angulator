(function(){
  'use strict';

  //this is just a container
  //it contains the ng-app 'angulator'
  angular.module('angulator', [])
  //the first variable in this array is to prevent minification from screwing stuff up
  .controller('MainController', ['$scope', function($scope){ //<----This function IS the actual controller
    $scope.display = '0';
    $scope.memory = '0';
    $scope.operator = '';
    $scope.clearDisplay = function(){
      $scope.display = '0';
    },
    $scope.addToDisplay = function(num){
      num = num.toString();
      if(num === '.' && $scope.display.indexOf('.') > -1) { return;}

      if($scope.display === '0' && num !== '.') {
        $scope.display = num;
      }
      else {
        $scope.display += num;
      }

    $scope.calculate = function(op){
      $scope.operator += op;
      $scope.memory = $scope.display;
      $scope.clearDisplay();
    };

    $scope.answer = function(){
      var left  = parseFloat($scope.display),
          right = parseFloat($scope.memory);

      if($scope.operator === '+') {  $scope.display = (left + right); }
      else if($scope.operator === '-') {  $scope.display = (left - right); }
      else if($scope.operator === '/') {  $scope.display = (right / left); }
      else {  $scope.display = (right * left); }



    }

    };
  }]);
})();