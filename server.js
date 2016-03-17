var webpack = require('webpack');
var WebPackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
// var ip;
// var EventEmitter = require('events').EventEmitter;
// var ee = new EventEmitter();

// ee.on('set-ip', function () {
//   new WebPackDevServer(webpack(config), {
//     publicPath: config.output.publicPath,
//     hot: true,
//     historyApiFallback: true
//   }).listen(8080, ip);
// });

// var getIp = function () {
//   require('dns').lookup(require('os').hostname(), function (err, add, fam) {
//     if (!err) {
//       console.log(add);
//       ip = add;
//       ee.emit('set-ip');
//     }
//   });
// };

new WebPackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(8080, 'localhost');
