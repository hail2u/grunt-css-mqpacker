# grunt-css-mqpacker

> Pack same media query rules into one media query rule using [CSS MQPacker](https://github.com/hail2u/node-css-mqpacker).


## Getting Started

This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
$ npm install grunt-css-mqpacker --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```javascript
grunt.loadNpmTasks('grunt-css-mqpacker');
```


## The "css_mqpacker" task


### Overview

In your project's Gruntfile, add a section named `css_mqpacker` to the data object passed into `grunt.initConfig()`.

```javascript
grunt.initConfig({
  css_mqpacker: {
    main: {
      options: {
        map: true
      },

      expand: true,
      cwd: 'src/css/',
      src: '*.css',
      dest: 'dest/css/'
    }
  },
});
```

Running `$ grunt css_mqpacker` with these options will pack media queries in `src/css/*.css` with inline source maps, and output to `dest/css/*.css`.


### Options

The task options are the same as second argument of [PostCSS `process()` method](https://github.com/postcss/postcss). With these options, you can create or update source maps. For more information, please read the PostCSS document.


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
