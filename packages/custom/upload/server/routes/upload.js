'use strict';

var upload = require('../controllers/upload');

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Upload, app, auth, database) {

  app.get('/upload/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/upload/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/upload/signature',function(req, res, next) {
//    res.send('sfdsfsfs');
    res.send(upload.getCredentials());
  });

  app.get('/upload/get/:image', function(req, res, next) {
      
     res.send({url:upload.show(req.params.image)});
  });
  
  app.post('/delete/file',function(req, res, next) {
      
       res.send({url:upload.delete(req.body.file)});
  });
};
