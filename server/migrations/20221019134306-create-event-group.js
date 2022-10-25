'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EventGroups', {
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
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        deafultValue: true
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
    await queryInterface.dropTable('EventGroups');
  }
};