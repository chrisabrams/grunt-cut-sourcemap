grunt-cut-sourcemap
===================

Cut source map and move to external file. I didn't want to make this but the two other projects I found didn't do anything.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cut-sourcemap --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cut-sourcemap');
```

## The "cut" task

### Overview
In your project's Gruntfile, add a section named `cut` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cut: {
    files: {
      'public/js/app.js': 'public/js/app.js'
    }
  }
})
```