(function (){
'use strict';

angular.module('MyFirstApp', [])
.controller('MyFirstController', function($scope){
  $scope.name="Navya";
  $scope.sayHello = function () {

  return  "Hello Everyone";
};

});

})();
