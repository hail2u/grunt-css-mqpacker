"use strict";

module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: ".jshintrc"
      },

      all: [
        "Gruntfile.js",
        "tasks/*.js",
        "<%= nodeunit.tests %>"
      ]
    },

    clean: {
      tests: ["tmp"]
    },

    css_mqpacker: {
      default_options: {
        src: "test/fixtures/default.css",
        dest: "tmp/default_options.css"
      },

      external: {
        options: {
          map: {
            inline: false
          }
        },

        src: "test/fixtures/default.css",
        dest: "tmp/external.css"
      },

      no_sourcesContent: {
        options: {
          map: {
            sourcesContent: false
          }
        },

        src: "test/fixtures/default.css",
        dest: "tmp/no_sourcescontent.css"
      }
    },

    nodeunit: {
      tests: ["test/*_test.js"]
    }
  });

  grunt.loadTasks("tasks");

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-nodeunit");

  grunt.registerTask("test", ["clean", "css_mqpacker", "nodeunit"]);

  grunt.registerTask("default", ["jshint", "test"]);
};
