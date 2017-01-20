
define(['./controllers'], function(controllers){

    controllers.controller('jsonController',['$scope','downloadJsonService',/*'dataSource',*/ function($scope, downloadJsonService/*, dataSource*/){
      $scope.users = [];
      $scope.downloadJson = function(){
        downloadJsonService.getJson().then( function ( settings ) {
          settings.forEach(function(item, index){
              $scope.users[index] = item;
          });
        });
          // you can use dataSource directly
        /* var request = dataSource.getItems( 'https://api.mongolab.com/api/1/databases/angularjs-intro/collections/users?apiKey=terrPcifZzn01_ImGsFOIZ96SwvSXgN9' );
         console.dir(request);
         console.log("Hi again got!!!");
         request.then(function(response){
           console.log(response.data);
         }, function(error){

         });
       */
      };

    }]);

});
