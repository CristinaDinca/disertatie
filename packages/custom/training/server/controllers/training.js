'use strict';


/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Training = mongoose.model('Training'),
  _ = require('lodash');

/**
 * 
 * @param {type} req
 * @param {type} res
 * @param {type} next
 * @param {type} id
 * @returns {undefined}Find training by id 
 */
exports.training=function(req,res,next,id) {
    Training.load(id,function(err,training) {
       if (err) return next(err); 
       if (!training) return next (new Error('Failed to load training ' + id));
       req.training=training;
       next();
    });
};

exports.create=function(req,res) {
   var training = new Training (req.body);
   training.user=req.user;

   training.save(function(err) {
      if (err) {
          return res.status(500).json({
              error:err
          });
      } 
     return  res.json(training);
   });
};


exports.all = function(req,res){
  Training.find().exec(function(err,trainings){
      if(err) {
          return res.status(500).json({
              error:'Cannot find trainings'
          });
      }
      return res.json({data:trainings});
  });
};