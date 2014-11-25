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

      if (options.map) {
        options.from = src;
        options.to = dest;
      }

      var processed = mqpacker.pack(grunt.file.read(src), options);
      grunt.file.write(dest, processed.css);
      grunt.log.writeln('File ' + dest + ' created.');

      if (options.map && processed.map) {
        var map = options.to + '.map';
        grunt.file.write(map, processed.map);
        grunt.log.writeln('File ' + map + ' created.');
      }

      next();
    }, function (err) {
      done(err);
    });
  });
};
