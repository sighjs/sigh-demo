var all, env, glob, concat, write, babel

module.exports = function(pipelines) {
  pipelines['js:all'] = [
    all(
      [ glob({ basePath: 'src' }, '*.js'), babel({ modules: 'common' }) ],
      glob('bootstrap.js')
    ),
    env(concat('combined.js'), 'production'),
    write('dist/assets')
  ]
}
