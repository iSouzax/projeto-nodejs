const models = require('../../models');

exports.index = (req, res) => {
    models.Produto.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then((produtos) => {
        res.status(200).json(produtos)
    }).catch((err) => {
        res.send(err)
    });
}