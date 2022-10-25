'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('paymentTypes', null, {});
    await queryInterface.bulkInsert('paymentTypes', [
      {
      id: 'f9f96f5f-82cf-40f4-8166-b9735d7c6c84',
      title: 'M-PESA',
      createdAt: '2022-10-25 14:15:30',
      updatedAt: '2022-10-25 14:15:30'
      },
      {
        id: '3cc83561-ce0b-40e8-b23b-43eaa2ef56cc',
        title: 'Tigo Pesa',
        createdAt: '2022-10-25 14:15:30',
        updatedAt: '2022-10-25 14:15:30'
      },
      {
        id: 'e4919ce6-dfcc-461e-8877-3b1df615be48',
        title: 'Airtel Money',
        createdAt: '2022-10-25 14:15:30',
        updatedAt: '2022-10-25 14:15:30'
      },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('paymentTypes', null, {});
  }
};
