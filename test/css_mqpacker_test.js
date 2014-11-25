'use strict';

var fs = require('fs');

var read = function (filename) {
  return fs.readFileSync(filename, 'utf8');
};

exports.css_mqpacker = {
  default_options: function (test) {
    test.expect(1);

    var actual = read('tmp/default_options.css');
    var expected = read('test/expected/default_options.css');
    test.equal(
      actual,
      expected,
      'should pack media queries.'
    );

    test.done();
  },

  external: function (test) {
    test.expect(1);

    var actual = read('tmp/external.css');
    var expected = read('test/expected/external.css');
    test.equal(
      actual,
      expected,
      'should pack media queries with external source map link.'
    );

    test.done();
  },

  no_sourcesContent: function (test) {
    test.expect(1);

    var actual = read('tmp/no_sourcescontent.css');
    var expected = read('test/expected/no_sourcescontent.css');
    test.equal(
      actual,
      expected,
      'should pack media queries without sources.'
    );

    test.done();
  }
};
