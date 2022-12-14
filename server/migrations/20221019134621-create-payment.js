'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Payments', {
      id: {
        type: Sequelize.UUID,
        deafultValue: Sequelize.UUIDV4,
        primaryKey: true
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
      paymentTypeId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'PaymentTypes',
            schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false
      },
      eventAmountId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'EventAmounts',
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
      confirmationNumber: {
        type: Sequelize.STRING,
        allowNull: true
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
    await queryInterface.dropTable('Payments');
  }
};