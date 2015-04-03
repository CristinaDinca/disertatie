'use strict';

/* jshint -W098 */
angular.module('mean.upload',['ngS3upload']).controller('UploadController', ['$scope', 'Global', 'Upload',
function($scope, Global, Upload) {
  $scope.global = Global;
  $scope.package = {
    name: 'upload'
  };

//    $scope.image=Upload.getImage();
//    $scope.signature=Upload.getSignature();
//    $scope.url='https://'+$scope.signature.backet+'.s3.amazonaws.com/';
$scope.files=[];
$scope.$on('s3upload:success', function(event, args,path) {
    $scope.files.push({path:path.path,fileName:path.path.replace(args.responseURL,'')});

// do what you want to do
});

$scope.deleteFile=function(filePath) {
  Upload.deleteFile(filePath);
};
}
]).config(function(ngS3Config) {
  ngS3Config.theme = 'bootstrap3';
});
