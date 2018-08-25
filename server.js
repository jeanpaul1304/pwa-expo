var 
	express = require('express'),
	bodyParser = require('body-parser'),
	app = express();

app.use(express.static('./'));

app.listen(3001);

console.log("Servidor iniciado, servidor escuchando...");