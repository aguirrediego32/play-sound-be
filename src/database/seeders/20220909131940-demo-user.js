'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Nicolas Bordon',
        email: 'nico@gmail.com',
        password: await bcrypt.hash('123456',10),
        createdAt: new Date(),
        updatedAt: new Date(),
        role: 'user'
      },
      {
        name: 'Robert Musicman',
        email: 'music@gmail.com',
        password: await bcrypt.hash('123456',10),
        createdAt: new Date(),
        updatedAt: new Date(),
        role: 'artist'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
