"use strict"

module.exports = (grunt) ->

  require("matchdep").filterDev("grunt-*").forEach grunt.loadNpmTasks
  grunt.loadTasks('tasks')

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    clean: ['test/output']

    copy:
      main:
        cwd: 'test/input/'
        expand: true
        filter: 'isFile'
        src: '**'
        dest: 'test/output/'

    cut:
      main:
        files:
          'test/output/app.js': 'test/output/app.js'

  grunt.registerTask 'default', ['clean', 'copy', 'cut']
