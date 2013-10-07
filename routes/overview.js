// main entry for web interface
var redis = require("redis");
var fs = require('fs');

var conf = fs.readFileSync("migaloo.conf", {
  "encoding": "UTF-8"
});

var cfg = JSON.parse(conf);

exports.stat = function(req, res) {

  var stats = [];

  cfg.servers.forEach(function(server) {

    var client = redis.createClient(server.port, server.host);

    client.on('ready', function() {
      client.server_info.host = server.host;
      client.server_info.port = server.port;
      stats.push(client.server_info);
      client.quit();

      if (stats.length == cfg.servers.length) {
        render(res, {
          "stats": stats
        });
      }
    });
  });
};

function render(res, obj) {
  res.render('main', obj);
}