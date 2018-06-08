var controller = require('../controllers/comercioControllers');

app.get('/', controller.inicio);
app.get('/listaPedido', controller.listaPedido);
app.get('/pedido/views/:codigo', controller.listarItens);

app.get('/novoPedido', controller.add);
app.get('/pedido_editar/views/:codigo', controller.alteraPedido);

app.get('/item_editar/views/:codigo', controller.listarItensById);

app.post('/pedido/novo', controller.addPedido);
app.post('/pedido_edtar/alterar', controller.atualizarPedido);

app.get('/pedido/excluir/:codigo', controller.deletaPedido);