app.controller('mtNavbarCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}]);

app.directive('mtNavbar', function() {
  return {
    restrict: 'E',
    templateUrl: '/app/core/partials/navbar.html',
    controller: 'mtNavbarCtrl'
  };
});
