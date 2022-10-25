'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('shares', null, {});
    await queryInterface.bulkInsert('shares', [
      {
      id: '8f43f338-502c-4086-99e5-ea965304250a',
      title: 'Facebook',
      createdAt: '2022-10-25 14:15:30',
      updatedAt: '2022-10-25 14:15:30'
      },
      {
        id: '33130f24-98a6-48a0-8a0e-65207a5614e3',
        title: 'Instagram',
        createdAt: '2022-10-25 14:15:30',
        updatedAt: '2022-10-25 14:15:30'
      },
      {
        id: 'e19aeddc-d327-4ce2-9b4c-9740952fe3ae',
        title: 'Twitter',
        createdAt: '2022-10-25 14:15:30',
        updatedAt: '2022-10-25 14:15:30'
      },
      {
        id: '4b8bd02e-871f-4d79-804b-08b6a99ade82',
        title: 'Whatsapp',
        createdAt: '2022-10-25 14:15:30',
        updatedAt: '2022-10-25 14:15:30'
      },
  ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('shares', null, {});
  }
};
