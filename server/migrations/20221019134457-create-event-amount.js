'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EventAmounts', {
      id: {
        type: Sequelize.UUID,
        deafultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      eventAmountCategoryId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'EventAmountCategories',
            schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false
      },
      eventId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'events',
            schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false
      },
      amount: {
        type: Sequelize.DECIMAL(10, 2)
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
    await queryInterface.dropTable('EventAmounts');
  }
};