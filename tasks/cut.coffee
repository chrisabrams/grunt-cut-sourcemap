extractMap = require '../lib/extract'

module.exports = (grunt) ->

  grunt.registerMultiTask 'cut', 'Cut source map and move to external file.', ->

    #cwd = grunt.config('cwd') or ''
    options = @options()
    #sources = []

    for source in @files
      console.log "source", source
      extractMap source
