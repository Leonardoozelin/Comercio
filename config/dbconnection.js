var mysql = require('mysql');
var database = '...'; //Nome do Seu banco de dados


// criar instancia do banco de dados
var client = mysql.createConnection({
   user: 'root',
   password: 'Fatec123*', //Caso sua senha seja outra so alterar
   host: 'localhost',
   port: 3306
});

// colocar o banco de dados em uso - ativo
client.query('USE ' + database);

module.exports = client;
