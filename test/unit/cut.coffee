extractMap = require '../../lib/extract'
fs = require 'fs'

describe 'Unit', ->

  it 'should cut a source map to an external file', (done) ->

    extractMap __dirname + '/../input/app.js'

    source = fs.readFileSync(__dirname + '/../input/app.js')
    expect(source).to.be.an 'object'

    map = fs.readFileSync(__dirname + '/../input/app.js.map')
    expect(map).to.be.an 'object'

    done()
