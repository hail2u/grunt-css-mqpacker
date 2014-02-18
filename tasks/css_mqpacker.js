/*
 * grunt-css-mqpacker
 * https://github.com/hail2u/grunt-css-mqpacker
 *
 * Copyright (c) 2014 Kyo Nagashima
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  var taskName = 'css_mqpacker';
  var taskDescription = 'Pack same media query rules into one media query rule using CSS MQPacker.';

  grunt.registerMultiTask(taskName, taskDescription, function () {
    var async= require('async');
    var mqpacker = require('css-mqpacker');

    var done = this.async();
    var options = this.options({});

    async.each(this.files, function (file, next) {
      var src = file.src[0];
      var dest = file.dest;

      if (!grunt.file.exists(src)) {
        grunt.log.warn('Source file "' + src + '" not found.');

        return next();
      }

      var css = grunt.file.read(src);
      grunt.file.write(dest, mqpacker.pack(css, options).css);
      grunt.log.ok('File ' + dest + ' created.');
      next();
    }, function (err) {
      done(err);
    });
  });
};
