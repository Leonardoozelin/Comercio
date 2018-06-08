var model = require('../models/comercio')

module.exports = {
    inicio,
    listaPedido,
    listarItens,
    add,
    alteraPedido,
    listarItensById,
    addPedido,
    atualizarPedido,
    deletaPedido
}

function inicio(req, res) {
 
    res.render('../app/views/index.ejs');
}

function listaPedido(req, res) {
    model.listarPedido(function(err, result){
        if (err) {
            throw err;
        }
        res.render('../app/views/listaPedido.ejs', {pedido: result});
    })
}

function listarItens(req, res){
    var id = req.params.codigo;
    model.listarItem(id, function(err, result){
        if (err) {
            throw err;
        }
        res.render('../app/views/listaItem.ejs', {itemPedido: result});
    })
}

function add(req, res) {
    res.render('../app/views/novoPedido.ejs');
}

function alteraPedido(req, res){
    var id = req.params.codigo;
    model.listarPedidoById(id, function(err,result) {
        if (err) {
            throw err;
        }
        res.render('../app/views/pedidoAlterar.ejs', {pedido: result});
    })
    
}

function listarItensById(req, res) {
    var id = req.params.codigo;
    model.listarItemBtId(id, function(err, result) {
        if (err) {
            throw err;
        }
        res.render('../app/views/itemAlterar.ejs', {itens: result});
    })
}

function addPedido(req, res) {
    var dados = req.body;
    model.addPedido(dados, function(err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/listaPedido');
    })
}

function atualizarPedido(req, res) {
    var dados = req.body;
    model.alterarPedido(dados, function(err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/listaPedido');
    })
}

function deletaPedido(req, res) {
    id = req.params.codigo
    model.deletaPedido(id, function(err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/listaPedido');
    })
}