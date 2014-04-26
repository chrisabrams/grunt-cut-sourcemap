convert = require 'convert-source-map'
fs   = require 'fs'
path = require 'path'

replaceAll = (find, replace, str) ->
  return str.replace new RegExp(find, "g"), replace

module.exports = (options) ->

  src = options.orig.src[0]
  dest = options.dest

  str = src
  n   = str.lastIndexOf('/')
  filePath = str.substring(0, n)

  file   = fs.readFileSync src, 'utf8'
  match  = file.split 'json;base64,'

  if match.length < 2
    return console.error "No source file found: #{src}"

  map = src + '.map'

  #file = file.replace /\/\/@ sourceMappingURL=data:application\/json;base64,(.*)\n/, "//@ sourceMappingURL=#{path.basename(src)}\n"
  file = file.substring(0, file.indexOf('sourceMappingURL=')) + "sourceMappingURL=#{path.basename(src)}.map\n"

  mapData = '//# sourceMappingURL=data:application/json;base64,' + match[1]

  json = convert
    .fromComment(mapData)
    .toJSON()

  json = replaceAll process.cwd(), '', json

  fs.writeFileSync src, file
  fs.writeFileSync map, json
