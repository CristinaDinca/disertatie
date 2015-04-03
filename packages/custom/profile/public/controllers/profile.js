'use strict';

/* jshint -W098 */
angular.module('mean.profile').controller('ProfileController', ['$scope', 'Global', 'Profile','$http','Upload','$location',
  function($scope, Global, Profile,$http,Upload,$location) {
    $scope.global = Global;
    $scope.package = {
      name: 'profile'
    };
    $http.get('/users/me')
        .success(function(data) {
          $scope.user = data;
            // get user image 
           $scope.user.imageFullUrl =Upload.getImage($scope.user.imageURL);
            
        });
    
     $scope.$on('s3upload:success', function(event, args,path) {
      
      $scope.user.imageFullUrl.url=path.path;
       $scope.user.imageURL=path.path.replace(args.responseURL,"");
    
    // do what you want to do
});

    $scope.save=function(){
        if($scope.profileForm.$valid)
        {   
          $http.post('/users/me',$scope.user)
            .success(function(data) { 
              $scope.user = data;
                $location.url('profile/view');
            });
        }
    };
    
    $scope.view=function(){
        $location.url('profile/view'); 
    };
  }
]);
