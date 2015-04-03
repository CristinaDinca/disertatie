'use strict';


var training = require('../controllers/training');

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Training, app, auth, database) {

  app.get('/training/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.post('/training',auth.requiresLogin,function(req, res, next) {
    res.send(training.create(req,res));
  });
  app.get('/training',auth.requiresLogin,training.all);

  app.get('/training/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/training/example/render', function(req, res, next) {
    Training.render('index', {
      package: 'training'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
