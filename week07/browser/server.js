const http = require("http");

const body = `<html>
<head>
	<style>
		.container {
			display: flex;
			width: 800px;
			height: 600px;
			background-color: rgb(255,255,255);
			justify-content: space-around;
			align-items: center;
		}
		.one {
			width: 300px;
			height: 600px;
			background-color: rgb(179,157,219);
		}
		.two {
			width: 200px;
			height: 400px;
			background-color: rgb(255,224,130);
		}		
    </style>
	</head>
	<body>
	    <div class="container">
        	<div class="one"></div>
        	<div class="two"></div>
	    </div>
	</body>
</html>`;

const server = http.createServer((req, res) => {
    console.log("request received");
    console.log(req.method, req.url);
    console.log(req.headers);
    res.setHeader("Context-Type", "text/plain");
    res.writeHead(200);
    res.end(body);
});

server.listen(8080);