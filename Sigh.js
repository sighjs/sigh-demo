var all, glob, concat, write

module.exports = function(pipelines) {
  pipelines['js:all'] = [
    all(
      glob('src/*.js'),
      glob('bootstrap.js')
    ),
    concat('combined.js'),
    write('dist/assets')
  ]
}
