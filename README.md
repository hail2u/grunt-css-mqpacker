# grunt-css-mqpacker

> Pack same media query rules into one media query rule using CSS MQPacker.


## Getting Started

This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-css-mqpacker --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-css-mqpacker');
```


## The "css_mqpacker" task


### Overview

In your project's Gruntfile, add a section named `css_mqpacker` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  css_mqpacker: {
    options: {
      map: true
    },
    main: {
      expand: true,
      cwd: 'src/css/',
      src: '*.css',
      dest: 'dest/css/'
    }
  },
});
```


### Options

The options are the same as second argument of [PostCSS](https://github.com/ai/postcss)'s `process()`. With this options, you can update a existing Source Map file. For more information, please read the PostCSS document.

#### options.map

You can set `options.map` same as PostCSS's `process()` (e.g. `true`, `false` and Source Map content). Additionally, you can update an existent Source Map file by specifing its path.

```js
grunt.initConfig({
  css_mqpacker: {
    options: {
      map: 'src/css/style.css.map'
    },
    main: {
      src: 'src/css/style.css',
      dest: 'dest/css/style.css'
    }
  },
});
```


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
