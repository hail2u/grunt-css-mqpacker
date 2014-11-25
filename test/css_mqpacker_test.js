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

  inline: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/inline.css');
    var expected = grunt.file.read('test/expected/inline.css');
    test.equal(actual, expected, 'should pack media queries with inline source map.');

    test.done();
  },

  external: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/external.css');
    var expected = grunt.file.read('test/expected/external.css');
    test.equal(actual, expected, 'should pack media queries with external source map link.');

    test.done();
  },

  no_sourcesContent: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/no_sourcescontent.css');
    var expected = grunt.file.read('test/expected/no_sourcescontent.css');
    test.equal(actual, expected, 'should pack media queries with inline source map that excludes its sources.');

    test.done();
  }
};
