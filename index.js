require.config({
            paths: {
                'angular': 'libs/angular',
                 'domReady': 'libs/domReady',
            },
            shim: {
                    'angular': {
                        exports: 'angular'
                    }
                },
   });


   require(
    [
        'angular',
        'app',
        'domReady',
        'js/service/dataService',
        'js/service/downloadJsonService',
        'js/controller/loginController',
        'js/controller/jsonController'
        // Any individual controller, service, directive or filter file
       // that you add will need to be pulled in here.


    ],
    function (angular, app, domReady) {
        'use strict';

        // Module specific configuration
        // angular.module('app.config', [])
        //     .value('app.config', {
        //         basePath: '/api/v1' // Set your base path here
        //     });

        domReady(function () {
            angular.bootstrap(document, ['myapp']);  //myapp is the main module defined in app.js
            // The following is required if you want AngularJS Scenario tests to work
            angular.element(document.querySelector('html')).addClass('ng-app: myapp');
        });
    }
);
