app.controller('mtNavbarCtrl', ['$scope', function ($scope) {

}]);

app.directive('mtNavbar', function() {
  return {
    restrict: 'E',
    templateUrl: '/app/core/partials/navbar.html',
    controller: 'mtNavbarCtrl'
  };
});
