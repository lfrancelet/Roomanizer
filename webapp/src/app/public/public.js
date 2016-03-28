(function () {
    "use strict";
    angular.module('roomanizer.public', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('roomanizer.public', {
                url: 'public',
                views: {
                    'main@': {
                        controller:'PublicCtrl as publicCtrl', 
                        templateUrl: 'app/public/public.tmpl.html'
                    }
                }
            })
        ;
    })
    .controller("PublicCtrl", function PublicCtrl(){
    	console.log("Hello");
    });
}());