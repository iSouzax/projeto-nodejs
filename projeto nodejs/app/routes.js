const express = require('express');
const router = express.Router();

//controllers

const ProdutoController = require('./controllers/ProdutoController');
/*#############################################################

                    ROUTERS ADMIN

###############################################################*/

//Router Informativo
router.get('/api/produto', ProdutoController.index);





module.exports = router;

