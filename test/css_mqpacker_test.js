/* jshint node: true */
'use strict';

var grunt = require('grunt');

exports.css_mqpacker = {
  setUp: function (done) {
    done();
  },

  default_options: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default_options.css');
    var expected = grunt.file.read('test/expected/default_options.css');
    test.equal(actual, expected, 'should pack media queries.');

    test.done();
  },

  custom_options: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/custom_options.css');
    var expected = grunt.file.read('test/expected/custom_options.css');
    test.equal(actual, expected, 'should pack media queries with Source Map link.');

    test.done();
  }
};
