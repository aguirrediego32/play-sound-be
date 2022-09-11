'use strict';
const { Album, Artist } = require('../models/index')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tracks', [
      {
        name: 'Getting Over',
        albumId: 1,
        cover: 'https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg',
        artistId: 1,
        duration: 333,
        url: 'http://localhost:3000/track-1.mp3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Snow Tha Product || BZRP Music Sessions #39',
        albumId: 2,
        cover: 'https://is5-ssl.mzstatic.com/image/thumb/Features125/v4/9c/b9/d0/9cb9d017-fcf6-28c6-81d0-e9ac5b0f359e/pr_source.png/800x800cc.jpg',
        artistId: 2,
        duration: 333,
        url: 'http://localhost:3000/track-2.mp3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Calypso (Original Mix)',
        albumId: 3,
        cover: 'https://cdns-images.dzcdn.net/images/cover/1db3f8f185e68f26feaf0b9d72ff1645/350x350.jpg',
        artistId: 3,
        duration: 333,
        url: 'http://localhost:3000/track-3.mp3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bad Habits',
        albumId: 4,
        cover: 'https://www.lahiguera.net/musicalia/artistas/ed_sheeran/disco/11372/tema/25301/ed_sheeran_bad_habits-portada.jpg',
        artistId: 4,
        duration: 333,
        url: 'http://localhost:3000/track-4.mp3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'BEBE (Official Video)',
        albumId: 5,
        cover: 'https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc',
        artistId: 5,
        duration: 333,
        url: 'http://localhost:3000/track-5.mp3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'T.N.T. (Live At River Plate, December 2009)',
        albumId: 6,
        cover: 'https://cdns-images.dzcdn.net/images/cover/ba5eaf2f3a49768164d0728b7ba64372/500x500.jpg',
        artistId: 6,
        duration: 333,
        url: 'http://localhost:3000/track-6.mp3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '50 Cent - Candy Shop (feat. Olivia)',
        albumId: 7,
        cover: 'https://i.scdn.co/image/ab67616d0000b27391f7222996c531b981e7bb3d',
        artistId: 7,
        duration: 333,
        url: 'http://localhost:3000/track-7.mp3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bésame',
        albumId: 8,
        cover: 'https://i1.sndcdn.com/artworks-000247627460-1hqnjr-t500x500.jpg',
        artistId: 8,
        duration: 333,
        url: 'http://localhost:3000/track-8.mp3',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tracks', null, {});
  }
};
