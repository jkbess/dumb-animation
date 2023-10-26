const path = require('path');

module.exports = {
    // 1
    entry: __dirname + '/src/index.js',
    // 2
    output: {
      path: __dirname + '/dist',
      filename: 'Animator.js',
      library: {
        name: 'Animator',
        type: 'window',
        export: 'default'
      }
    },
    // 3
    devServer: {
      static: [
        {
          directory: path.join(__dirname, 'example'),
        },
        {
          directory: path.join(__dirname, 'dist'),
        },
      ],
      open: ['/index.html']
    },
    mode: 'production'
};
