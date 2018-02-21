var smartApp = angular.module('smartApp', ['restangular','ui.router']);
/**
 */

var dbSever = 'http://localhost:8000/';
var dbServe = window.location.origin + "/";

smartApp.config(function($stateProvider, $urlRouterProvider,$locationProvider) {

    $urlRouterProvider.otherwise('/home');

    $locationProvider.hashPrefix('');
    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'index.html'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
        	url: '/about',
            templateUrl: 'views/about.html'
            // we'll get to this in a bit       
        });


});


smartApp.config(function (RestangularProvider) {
        var newBaseUrl = dbSever;
        RestangularProvider.setBaseUrl(newBaseUrl);
    })
