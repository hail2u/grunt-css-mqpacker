/* jshint node: true */
'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },

      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ]
    },

    clean: {
      tests: ['tmp']
    },

    css_mqpacker: {
      default_options: {
        expand: true,
        cwd: 'test/fixtures/',
        src: 'default_options.css',
        dest: 'tmp/'
      },

      custom_options: {
        options: {
          map: true
        },

        expand: true,
        cwd: 'test/fixtures/',
        src: 'custom_options.css',
        dest: 'tmp/'
      }
    },

    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['clean', 'css_mqpacker', 'nodeunit']);

  grunt.registerTask('default', ['jshint', 'test']);
};
