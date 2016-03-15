// name, email and phone


function MainController($scope){
  $scope.name="Chen";
  $scope.email="test@example.com";
  $scope.phone="123456789";
}

angular.module('app').controller('MainController', MainController);