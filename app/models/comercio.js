var client = require('../../config/dbconnection');
var tabela1 = "pedido";
var tabela2 = "itempedido";

module.exports = {
    listarPedido,
    listarItem
}

function listarPedido (callback){
    client.query('SELECT * FROM ' + tabela1, callback);
}

function listarItem (id, callback){
    client.query('SELECT * FROM ' + tabela2 + ' WHERE ped_codigo = ' + id, callback);
}