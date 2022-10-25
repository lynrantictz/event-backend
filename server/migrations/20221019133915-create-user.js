'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.UUID,
        deafultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      accountId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'accounts',
            schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false
      },
      googleId: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      },
      userName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true
      },
      mobile: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false
      },
      emailVerifiedAt: {
        type: Sequelize.DATE,
        allowNull: true
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
    await queryInterface.dropTable('Users');
  }
};