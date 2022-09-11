'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Artists', [
      {
        name: 'David Guetta',
        nickname: 'David Guetta',
        nationality: 'FR',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Snow',
        nickname: 'Snow',
        nationality: 'US',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Round Table Knights',
        nickname: 'Round Table Knights',
        nationality: 'US',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ed Sheeran',
        nickname: 'Ed Sheeran',
        nationality: 'UK',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gioli & Assia',
        nickname: 'Gioli & Assia',
        nationality: 'IT',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'AC/DC',
        nickname: 'AC/DC',
        nationality: 'US',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '50 Cent',
        nickname: '50 Cent',
        nationality: 'US',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bésame',
        nickname: 'Valentino',
        nationality: 'CO',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Artists', null, {});
  }
};
