var testApp = angular.module('testApp', ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider.when('/outside',
            {
                templateUrl:'views/FirstTest.html',
                controller:'FirstTestController'
            });
        $routeProvider.when('/home',
            {
                templateUrl:'views/SecondTest.html',
                controller:'SecondTestController'
            });
        $routeProvider.when('/form',
            {
                templateUrl: 'views/Form.html',
                controller: 'FormController'
            });
        $routeProvider.otherwise({redirectTo: '/outside'});
    });