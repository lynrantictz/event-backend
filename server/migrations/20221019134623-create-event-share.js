'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EventShares', {
      id: {
        type: Sequelize.UUID,
        deafultValue: Sequelize.UUIDV4,
        primaryKey: true
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
      shareId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'shares',
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
    await queryInterface.dropTable('EventShares');
  }
};