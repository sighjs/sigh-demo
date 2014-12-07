var all, glob, concat, write, traceur

module.exports = function(pipelines) {
  pipelines['js:all'] = [
    all(
      [ glob('src/*.js'), traceur({ modules: 'commonjs' }) ],
      glob('bootstrap.js')
    ),
    concat('combined.js'),
    write('dist/assets')
  ]
}
