'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PaymentUsers', {
      id: {
        type: Sequelize.UUID,
        deafultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      paymentId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'payments',
            schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false
      },
      userId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'users',
            schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PaymentUsers');
  }
};