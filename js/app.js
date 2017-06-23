angular.module('myApp',['ngRoute'])
    .config(function($routeProvider) {
        'use strict';

        $routeProvider
            .when('/', {
                templateUrl: 'js/pages/about.html'
            })
            .when('/portfolio', {
                templateUrl: 'js/pages/portfolio.html'
            })
            .when('/blog', {
                templateUrl: 'js/pages/blog.html'
            })
            .when('/contact',  {
                templateUrl: 'js/pages/contact.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });