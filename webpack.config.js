const path = require('path');

module.exports = {
    // 1
    entry: __dirname + '/src/index.js',
    // 2
    output: {
      path: __dirname + '/dist',
      filename: 'Animator.js'
    },
    // 3
    devServer: {
      directory: path.join(__dirname, 'public'),
      open: ['/example']
    },
    mode: 'production'
};
