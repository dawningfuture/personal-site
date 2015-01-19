var app = angular.module('mtPersonal', ['ngRoute']);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/home', {
            title: 'Matthew Thompson\'s Personal Web Presence',
            templateUrl: '/app/core/partials/under-construction.html',
            controller: 'mtUnderConstructionCtrl'
        }).
        when('/about', {
            title: 'About Matthew Thompson',
            templateUrl: '/app/core/partials/about.html',
            controller: 'mtAboutCtrl'
        }).
        when('/resume', {
            title: 'Resume',
            templateUrl: '/app/core/partials/resume.html',
            controller: 'mtResumeCtrl'
        }).
        otherwise({
            redirectTo: '/home'
        });
    }]);
app.run(['$rootScope', '$route',
    function ($rootScope, $route) {

        /* Updates the page title on route change */

        $rootScope.$on('$routeChangeSuccess', function (newVal, oldVal) {
            if (oldVal !== newVal) {
                document.title = $route.current.title;
            }
        });
}]);
