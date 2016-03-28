(function () {
    "use strict";
    angular.module('roomanizer.private', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('roomanizer.private', {
                url: 'private',
                views: {
                    'main@': {
                        controller:'PrivateCtrl as privateCtrl', 
                        templateUrl: 'app/private/private.tmpl.html'
                    }
                }
            })
        ;
    })
    .controller("PrivateCtrl", function PrivateCtrl(){
    	//console.log("Hello");
    });
}());