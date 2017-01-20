define(['./controllers'], function(controller){

    controller.controller('loginCntrl',['$scope', function($scope){

       $scope.dologin = function(){
        if($scope.userName==='satish' && $scope.password==='verma')
        {
          $scope.displayMsg ="Welcome! "+$scope.userName;
        }
        else{
          $scope.displayMsg ="Wrong userName";
        }
      };
    }]);

});
