var app = angular.module('mtPersonal', ['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: '/app/core/partials/under-construction.html',
                controller: 'mtUnderConstructionCtrl'
            }).
            when('/about', {
                templateUrl: '/app/core/partials/about.html',
                controller: 'mtAboutCtrl'
            }).
            when('/resume', {
                templateUrl: '/app/core/partials/resume.html',
                controller: 'mtResumeCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }]);
