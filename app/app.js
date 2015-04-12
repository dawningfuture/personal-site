var app = angular.module('mtPersonal', ['ngRoute']);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/', {
            title: 'Matthew Thompson',
            templateUrl: '/app/core/partials/main.html',
            controller: 'mtMainCtrl'
        }).
        when('/about', {
            title: 'About | Matthew Thompson',
            templateUrl: '/app/core/partials/about.html',
        }).
        when('/contact', {
            title: 'Contact | Matthew Thompson',
            templateUrl: '/app/core/partials/contact.html',
        }).
        when('/resume', {
            title: 'Resume | Matthew Thompson',
            templateUrl: '/app/core/partials/resume.html',
        }).
        when('/projects', {
            title: 'Projects | Matthew Thompson',
            templateUrl: '/app/core/partials/projects.html'
        }).
        when('/under-construction', {
            templateUrl: '/app/core/partials/under-construction.html',
        }).
        otherwise({
            redirectTo: '/'
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
