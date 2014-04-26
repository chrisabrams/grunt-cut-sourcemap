fs   = require 'fs'
path = require 'path'

module.exports = (source) ->

  str = source
  n   = str.lastIndexOf('/')
  filePath = str.substring(0, n)

  file   = fs.readFileSync source, 'utf8'
  match  = file.match /\/\/@ sourceMappingURL=data:application\/json;base64,(.*)\n/

  return if !match

  map = source + '.map'

  file = file.replace /\/\/@ sourceMappingURL=data:application\/json;base64,(.*)\n/, "//@ sourceMappingURL=#{path.basename(source)}\n"
   
  fs.writeFileSync source, file
  fs.writeFileSync map, match[1]
