var merge, babel, concat, debounce, env, glob, write, uglify

module.exports = function(pipelines) {
  pipelines['js:all'] = [
    merge(
      [
        glob({ basePath: 'src' }, '*.js'),
        babel({ modules: 'common' }),
      ],
      glob('bootstrap.js')
    ),
    // uglify should come after concat... see https://github.com/joyent/node/issues/9445
    env([ uglify(), debounce(500), concat('combined.js') ], 'production'),
    write('dist')
  ]
}
