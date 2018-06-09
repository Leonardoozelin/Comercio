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
    deletaPedido,
    adicionaItem,
    deletaItem,
    alterarItem
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

function adicionaItem(dados, callback) {
    var mysql = 'INSERT INTO ' + tabela2 + ' SET ? ';
    client.query(mysql, dados, callback);
}

function deletaItem(id, callback) {
    client.query('DELETE FROM ' + tabela2 + ' WHERE itp_codigo = ' + id, callback);
}

function alterarItem(dados, callback){

    var mysql = "UPDATE " + tabela2 + " SET itp_produto = '" + dados.itp_produto +"' , itp_quantidade = '" + dados.itp_quantidade + "' , itp_valorunit = '" + dados.itp_valorunit + "' , itp_valortotal = '" + dados.itp_valortotal + "' , ped_codigo = " + dados.ped_codigo + " WHERE itp_codigo = " + dados.itp_codigo;
    client.query(mysql, dados, callback);
}