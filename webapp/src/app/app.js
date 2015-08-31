"use strict"
angular.module('roomanizer', [
    'ui.router',
    'ngSanitize'
])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('roomanizer', {
            url: '/',
            views: {
                'main@': {
                    controller:'AppCtrl as appCtrl', 
                    templateUrl: 'app/app.tmpl.html'
                }
            }
        })
    ;
    $urlRouterProvider.otherwise('/');
})
.controller("AppCtrl", function AppCtrl($state){
    // Empty ctrl
});