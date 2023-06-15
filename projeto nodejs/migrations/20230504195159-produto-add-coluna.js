'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Produtos','lojasId',  {
      type: Sequelize.INTEGER,
    },);  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Produtos','lojasId');  
  }
};
