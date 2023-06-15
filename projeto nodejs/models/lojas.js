module.exports = (sequelize, Sequelize) => {

    const Loja = sequelize.define('Loja', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        nome: {
            type: Sequelize.STRING,

        },
    });

    Loja.associate = function (models) {
        // associations can be defined here
        Loja.hasMany(models.Produto, { foreignKey: 'lojaId' })

    };

    return Loja;
};