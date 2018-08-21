import http from 'http';
import url from 'url';
import httpProxy from 'http-proxy';
import path from 'path';
import fs from 'fs';
const port = process.argv[2] || 8888;

// //////////////////////////////////////////////////////////////////////////
// Adjust this settings to your needs for proxying the backend requests   //
// //////////////////////////////////////////////////////////////////////////

const proxyCfg = {
	// the prefix you use to call your backend functions via the proxy server
	prefix: '/proxy/',
	// the host of your backend server
	host: 'services.odata.org',
	// port of your backend server
	port: ''
};

const proxy = httpProxy.createProxyServer();

http.createServer(function(request, response) {
	let uri = url.parse(request.url).pathname;

	let filename = path.join(process.cwd(), uri);

	if (uri.indexOf(proxyCfg.prefix) === 0) {
		proxy.on('error', function(err, req, res) {
			// console.log("backend error");
			// console.log(err);
		});
		proxy.on('proxyRes', function(proxyRes, req, res) {
			// console.log('RAW Response from the target', JSON.stringify(proxyRes.headers, true, 2));
		});
		proxy.on('close', function(req, socket, head) {
			// view disconnected websocket connections
			// console.log('Client disconnected');
		});

		// We have to set the host of the request to the our remote server
		// It currently contains localhost... which leads to problems on some
		// servers
		request.headers.host = proxyCfg.host;
		// cut the prefix from the beginning of the url
		// request.url = request.url.slice(request.url.indexOf("/", 1));
		request.url = request.url.slice(proxyCfg.prefix.length);
		proxy.web(request, response, {
			// cause we use this script only during development and testing we
			// have a http connection. For https we have to do some additional
			// proxy configuration
			target: 'http://' + proxyCfg.host + (proxyCfg.port ? ':' + proxyCfg.port : '') + '/'
		});
	} else {
		fs.exists(filename, function(exists) {
			if (!exists) {
				response.writeHead(404, {
					'Content-Type': 'text/plain'
				});
				response.write('404 Not Found\n');
				response.end();
				return;
			}

			if (fs.statSync(filename).isDirectory()) filename += '/index.html';

			fs.readFile(filename, 'binary', function(err, file) {
				if (err) {
					response.writeHead(500, {
						'Content-Type': 'text/plain'
					});
					response.write(err + '\n');
					response.end();
					return;
				}

				response.writeHead(200);
				response.write(file, 'binary');
				response.end();
			});
		});
	}
}).listen(parseInt(port, 10));

console.log('UI5 App running at\n  => http://localhost:' + port + '/webapp\nCTRL + C to shutdown');
