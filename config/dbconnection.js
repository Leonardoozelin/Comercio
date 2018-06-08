var mysql = require('mysql');
var database = 'comercio';


// criar instancia do banco de dados
var client = mysql.createConnection({
   user: 'root',
   password: 'leo@mir',
   host: 'localhost',
   port: 3306
});

// colocar o banco de dados em uso - ativo
client.query('USE ' + database);

module.exports = client;