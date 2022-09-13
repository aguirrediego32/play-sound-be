'use strict';
const { Album, Artist } = require('../models/index')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tracks', [
      {
        name: 'Getting Over',
        albumId: 1,
        artistId: 1,
        duration: 333,
        url: 'https://playsoundst.blob.core.windows.net/mocktracks/track-1.mp3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Snow Tha Product || BZRP Music Sessions #39',
        albumId: 2,
        artistId: 2,
        duration: 333,
        url: 'https://playsoundst.blob.core.windows.net/mocktracks/track-2.mp3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Calypso (Original Mix)',
        albumId: 3,
        artistId: 3,
        duration: 333,
        url: 'https://playsoundst.blob.core.windows.net/mocktracks/track-3.mp3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bad Habits',
        albumId: 4,
        artistId: 4,
        duration: 333,
        url: 'https://playsoundst.blob.core.windows.net/mocktracks/track-4.mp3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'BEBE (Official Video)',
        albumId: 5,
        artistId: 5,
        duration: 333,
        url: 'https://playsoundst.blob.core.windows.net/mocktracks/track-5.mp3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'T.N.T. (Live At River Plate, December 2009)',
        albumId: 6,
        artistId: 6,
        duration: 333,
        url: 'https://playsoundst.blob.core.windows.net/mocktracks/track-6.mp3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '50 Cent - Candy Shop (feat. Olivia)',
        albumId: 7,
        artistId: 7,
        duration: 333,
        url: 'https://playsoundst.blob.core.windows.net/mocktracks/track-7.mp3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bésame',
        albumId: 8,
        artistId: 8,
        duration: 333,
        url: 'https://playsoundst.blob.core.windows.net/mocktracks/track-8.mp3',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tracks', null, {});
  }
};
