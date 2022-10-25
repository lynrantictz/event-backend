'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Events', {
      id: {
        type: Sequelize.UUID,
        deafultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      eventCategoryId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'EventCategories',
            schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false
      },
      eventGroupId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'EventGroups',
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
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      publishedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      dueAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      openAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      closedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        deafultValue: false
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
    await queryInterface.dropTable('Events');
  }
};