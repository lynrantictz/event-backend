'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('accounts', null, {});
    await queryInterface.bulkInsert('accounts', [
      {
      id: 'ea42b5cb-1eb6-47f3-9dcb-96b32af1fd18',
      title: 'Company',
      createdAt: '2022-10-25 14:15:30',
      updatedAt: '2022-10-25 14:15:30'
      },
      {
        id: 'f6ea0f3b-ca04-405c-b69d-82be29c92a0c',
        title: 'Indivudual',
        createdAt: '2022-10-25 14:15:30',
        updatedAt: '2022-10-25 14:15:30'
        },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('accounts', null, {});
  }
};
