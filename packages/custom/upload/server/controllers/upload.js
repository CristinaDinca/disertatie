'use strict';

var AWS = require('aws-sdk');
//AWS.config.region = 'us-west-2';
//var   _ = require('lodash');
var backet='cdibucket';
var keyId='AKIAI74WUZTKCTLJU22Q';
var secretKey= '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';
// configure the aws credentials
AWS.config.update({accessKeyId:keyId, secretAccessKey:secretKey});


/**
 * Get the sign url to the image 
 * @param S
 * @param {type} image
 * @returns {unresolved}tring image - represnt the image name 
 */

exports.show = function(image) {
    var s3 = new AWS.S3();
    var params = {Bucket: backet, Key: image};
    return s3.getSignedUrl('getObject', params);
    
  
};

exports.delete = function(image) {
    var s3 = new AWS.S3();
    var params = {Bucket: backet, Key: image};
   s3.deleteObject( params,function(err,data){
      if(data.DeleteMarker===true)
          return true;
      else
          return false;
  });
  
  return true;
  
};

exports.getCredentials=function(res){
   var policy = require('s3-policy');
 
var p = policy({
  secret: secretKey,
  length: 4024288000,
  bucket: backet,
  key: keyId,
  expires: new Date(Date.now() + 60000),
  acl: 'public-read',
  conditions :''
});
 
 return {
    'policy':p.policy  ,
    'signature':p.signature,
    'key':keyId,
    'backet':backet
  };
};
