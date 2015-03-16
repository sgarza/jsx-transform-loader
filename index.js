var jsxtransform = require('jsx-transform');
var loaderUtils = require('loader-utils');

module.exports = function(source) {
  this.cacheable && this.cacheable();

  var sourceFilename = loaderUtils.getRemainingRequest(this);
  var current = loaderUtils.getCurrentRequest(this);

  var result = jsxtransform.transform(source);
  
  this.callback(null, result, null);
};