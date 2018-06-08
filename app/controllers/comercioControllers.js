var model = require('../models/comercio')

module.exports = {
    inicio,
    listaPedido,
    listarItens
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