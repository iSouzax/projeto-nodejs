module.exports = (sequelize, Sequelize) => {

    const Produto = sequelize.define('Produto', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        nome: {
            type: Sequelize.STRING,

        },

        lojaId: {
            type: Sequelize.STRING,

        },
    });

    Produto.associate = function(models) {

        Produto.belongsTo(models.Loja, {
            //foreignKey: 'categoria_id', allowNull : false, 
            foreignKey: { name: 'lojaId', allowNull: false },
        })


    };

    return Produto;
};