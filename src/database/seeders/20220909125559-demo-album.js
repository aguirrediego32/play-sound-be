'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Albums', [{
        description: 'One Love',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'BZRP Music Sessions',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Round Table Knights',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Ed Sheeran',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Giolì & Assia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'AC/DC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: '50 Cent',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Valentino Ft MTZ Manuel Turizo (Video Oficial)',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Albums', null, {});
  }
};
