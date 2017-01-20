// The app/scripts/app.js file, which defines our AngularJS app

define(
	[
		'angular',
		'js/controller/controllers',
		'js/service/services',
		],
	function(angular) {
		'use strict';

  		var app = angular.module('myapp', [
  										 	'controllersModule',
												'servicesModule'
	                     ]);
						 				 app.controller('myCtrl', function($scope) {
								 		    $scope.firstName= "John";
								 		    $scope.lastName= "Doe";
								 		    $scope.greetingtext = "";
								 		    $scope.greet = false;
								 		    $scope.greetInEnglish = function(){
								 		      $scope.greetingtext = greetings.getGreetingsInEnglish()+ ( " "+ $scope.firstName +" "+ $scope.lastName);
								 		      $scope.greet = true;
								 		    };
								 		    $scope.greetInSpanish = function(){
								 		      $scope.greetingtext = greetings.getGreetingsInSpanish()+ (  $scope.firstName + $scope.lastName);
								 		      $scope.greet = true;
								 		    };
								 		    $scope.stopGreeting = function(){
								 		      $scope.greetingtext = "";
								 		      $scope.greet = false;
								 		    };
												  });

													app.controller(
													            "AppController",
													            function( $scope ) {
																				  $scope.rating = 64;
													                $scope.friends = [
													                    {
													                        id: 1,
													                        name: "Kim"
													                    },
													                    {
													                        id: 2,
													                        name: "Sarah"
													                    },
													                    {
													                        id: 3,
													                        name: "Tricia"
													                    }
													                ];
													            }
													        );

													app.directive(
										            "bnThing",
										            function() {
										                // Return the directive configuration. Notice that we are running at
										                // priority 1500, which is a lower priority than the previous directive
										                // binding (the one that augmented the transcluded content).
										                return({
										                    compile: compile,
										                    priority: 1500,
										                    restrict: "A",
										                    transclude: true
										                });
										                // I compile the directive. Since we are transcluding the entire element,
										                // we only have access to the "anchor comment" in this context.
										                function compile( tElement, tAttributes ) {
										                    console.log( "Container at compile (html):", tElement.html() );
										                    tElement.addClass( "container" );
										                    return( link );
										                }
										                // I link the directive. Since we can only access the content via the
										                // transclusion function, at this point, the content has already been
										                // compiled by the time we get the clone.
										                function link( scope, element, attributes, _c, transclude ) {
										                    console.log( "Container at link (html):", element.html() );
										                    // Clone and inject the transcluded content.
										                    transclude(
										                        function injectLinkedClone( clone ) {
										                            element.append( clone );
										                        }
										                    );
										                }
										            }
										        );

  		return app;
	}
);
