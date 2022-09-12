'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Albums', [{
        description: 'One Love',
        cover: 'https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'BZRP Music Sessions',
        cover: 'https://is5-ssl.mzstatic.com/image/thumb/Features125/v4/9c/b9/d0/9cb9d017-fcf6-28c6-81d0-e9ac5b0f359e/pr_source.png/800x800cc.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Round Table Knights',
        cover: 'https://cdns-images.dzcdn.net/images/cover/1db3f8f185e68f26feaf0b9d72ff1645/350x350.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Ed Sheeran',
        cover: 'https://www.lahiguera.net/musicalia/artistas/ed_sheeran/disco/11372/tema/25301/ed_sheeran_bad_habits-portada.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Giolì & Assia',
        cover: 'https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'AC/DC',
        cover: 'https://cdns-images.dzcdn.net/images/cover/ba5eaf2f3a49768164d0728b7ba64372/500x500.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: '50 Cent',
        cover: 'https://i.scdn.co/image/ab67616d0000b27391f7222996c531b981e7bb3d',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Valentino Ft MTZ Manuel Turizo (Video Oficial)',
        cover: 'https://i1.sndcdn.com/artworks-000247627460-1hqnjr-t500x500.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Albums', null, {});
  }
};
