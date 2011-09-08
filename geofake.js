function getPosition(params)
{
  var response = {
    status: "OK",
    location: {
        lat: params["lat"] ? params["lat"] : 37.41857,
        lng: params["lon"] ? params["lon"] : -122.08769,
      },
    accuracy: params["acc"] ? params["acc"] : 0,
  };

  if (params["access_token"])
      response["access_token"] = params["access_token"];

  return JSON.stringify(response);
}

var url  = require('url');
var http = require('http');

http.createServer(function (req, res) {
  params = url.parse(req.url, true).query,
  res.writeHead(200, {'Content-Type': 'application/x-javascript'});
  res.end(getPosition(params));
}).listen(8000, "127.0.0.1");

console.log('Server running at http://127.0.0.1:8000');
