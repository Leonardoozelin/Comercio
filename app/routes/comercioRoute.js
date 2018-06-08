var controller = require('../controllers/comercioControllers');

app.get('/', controller.inicio);
app.get('/listaPedido', controller.listaPedido);
app.get('/pedido/views/:codigo', controller.listarItens);