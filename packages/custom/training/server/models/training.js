'use strict';

/**
 * Module dependencies.
 */
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema,
    crypto    = require('crypto'),
          _   = require('lodash');
  

/**
 * Getter
 */
var escapeProperty = function(value) {
  return _.escape(value);
};

/**
 * Training Schema
 */

var TrainingSchema = new Schema({
title: {
    type: String,
    required: true,
    get: escapeProperty
  },
short_description: {
    type: String,
    required: true,
    get: escapeProperty
  },
description: {
    type: String,
    required: true,
    get: escapeProperty
  },
mediaURL: {
    type: String,
    required: false,
    get: escapeProperty
  },
stars: {
    type: Number,
     default:0,
    get: escapeProperty
  },
 created: {
    type: Date,
   default: Date.now(),
    get: escapeProperty
 },
 user: {
    type: String,
     required: false,
    get: escapeProperty
 }
});

mongoose.model('Training', TrainingSchema);
