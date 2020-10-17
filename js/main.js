angular.module('chatBox',['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: './view/login.html',
        }).when('/home', {
            templateUrl: './view/home.html'
        }).otherwise({ redirectTo: '/login' });
}]);;