var extractMap = require('../extract');

module.exports = function(grunt) {
  
  return grunt.registerMultiTask('cut', 'Cut source map and move to external file.', function() {
    //console.log("this", this)

    var options, source, _i, _len, _ref, _results;
    
    options = this.options();
    _ref = this.files;
    _results = [];
    
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      options = _ref[_i];
      //console.log("options", options);
      _results.push(extractMap(options));
    }

    return _results;
  });

};
