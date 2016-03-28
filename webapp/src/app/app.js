(function () {
    "use strict";
    angular.module('roomanizer', [
        'lumx',
        'ui.router',
        'ngSanitize',
        'roomanizer.public',
        'roomanizer.private'
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
        $state.go("roomanizer.public");
    });
}());