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
    deletaPedido,
    adicionaItem,
    deletaItem,
    alterarItem
}

function inicio(req, res) {

    res.render('../app/views/index.ejs');
}

function listaPedido(req, res) {
    model.listarPedido(function (err, result) {
        if (err) {
            throw err;
        }
        res.render('../app/views/listaPedido.ejs', { pedido: result });
    })
}

function listarItens(req, res) {
    var id = req.params.codigo;
    model.listarItem(id, function (err, result) {
        if (err) {
            throw err;
        }
        res.render('../app/views/listaItem.ejs', { itemPedido: result, teste: id });
    })
}

function add(req, res) {
    res.render('../app/views/novoPedido.ejs');
}

function alteraPedido(req, res) {
    var id = req.params.codigo;
    model.listarPedidoById(id, function (err, result) {
        if (err) {
            throw err;
        }
        res.render('../app/views/pedidoAlterar.ejs', { pedido: result });
    })

}

function listarItensById(req, res) {
    var id = req.params.codigo;
    model.listarItemBtId(id, function (err, result) {
        if (err) {
            throw err;
        }
        res.render('../app/views/itemAlterar.ejs', { itens: result });
    })
}

function addPedido(req, res) {
    var dados = req.body;
    model.addPedido(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/listaPedido');
    })
}

function atualizarPedido(req, res) {
    var dados = req.body;
    model.alterarPedido(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/listaPedido');
    })
}

function deletaPedido(req, res) {
    id = req.params.codigo
    model.deletaPedido(id, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/listaPedido');
    })
}

function adicionaItem(req, res) {
    var dados = req.body;
    var quantidade = dados.itp_quantidade;
    var vlr = dados.itp_valorunit;
    var total = quantidade * vlr;

    dados.itp_valortotal = total;


    model.adicionaItem(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/pedido/views/' + req.body.ped_codigo);
    });
}

function deletaItem(req, res) {
    var id = req.params.codigo;
    model.listarItemBtId(id, function (err, result) {
        if (err) {
            throw err;
        }
        var retorna_pedido = result[0].ped_codigo;
        model.deletaItem(id, function(err, result){
            if (err) {
                throw err;
            }
            res.redirect('/pedido/views/' + retorna_pedido);
        })
    })
}

function alterarItem(req, res){
    var dados = req.body;
    var quantidade = dados.itp_quantidade;
    var vlr = dados.itp_valorunit;
    var total = quantidade * vlr;

    dados.itp_valortotal = total;

    model.alterarItem(dados, function(err, result){
        if (err) {
            throw err;
        }
        res.redirect('/pedido/views/' + req.body.ped_codigo);
    })
}