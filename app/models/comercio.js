var client = require('../../config/dbconnection');
var tabela1 = "pedido";
var tabela2 = "itempedido";

module.exports = {
    listarPedido,
    listarItem,
    listarPedidoById,
    listarItemBtId,
    addPedido,
    alterarPedido,
    deletaPedido
}

function listarPedido (callback){
    client.query('SELECT * FROM ' + tabela1, callback);
}

function listarItem (id, callback){
    client.query('SELECT * FROM ' + tabela2 + ' WHERE ped_codigo = ' + id, callback);
}

function listarPedidoById(id, callback){
	client.query('SELECT * FROM ' + tabela1 + ' WHERE ped_codigo = ' + id, callback);
}

function listarItemBtId(id, callback){
	client.query('SELECT * FROM ' + tabela2 + ' WHERE itp_codigo = ' + id, callback)
}

function addPedido(dados, callback) {
	var msql = 'INSERT INTO ' + tabela1 + ' SET ? ';
	client.query(msql, dados, callback);
}

function alterarPedido(dados, callback) {
	var msql = "UPDATE " + tabela1 + " SET ped_nomecliente = '" + dados.ped_nomecliente +"' , ped_dtpedido = '" + dados.ped_dtpedido + "' , ped_condpagto = '" + dados.ped_condpagto + "' , ped_ativoinativo = '" + dados.ped_ativoinativo + "' , ped_ordem = " + dados.ped_ordem + " WHERE ped_codigo = " + dados.ped_codigo;
    client.query(msql, callback);
}

function deletaPedido(id, callback) {
	client.query('DELETE FROM ' + tabela1 + ' WHERE ped_codigo = ' + id, callback);
}