var all, glob, concat, write

module.exports = function(pipelines) {
  pipelines['js:all'] = [
    glob('src/*.js'),
    concat('combined.js'),
    write('dist/assets')
  ]
}
