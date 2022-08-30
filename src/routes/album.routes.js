const Router = require('express');
const router = Router();

const {createAlbum,readAlbum,updateAlbum,deleteAlbum, showAlbum} = require('../controllers/album.controller');

router.post('/album', createAlbum);

router.get('/albums', readAlbum);

router.post('/album/:id', updateAlbum);

router.delete('/album/:id', deleteAlbum);

router.get('/album/:id', showAlbum);

module.exports = router;
