const Router = require('express');
const router = Router();

const {createArtist, deleteArtist, readArtist, showArtist, updateArtist} = require('../controllers/artist.controller');

router.post('/artist', createArtist);

router.delete('/artist/:id', deleteArtist);

router.get('/artists', readArtist);

router.get('/artist/:id', showArtist);

router.post('/artist/:id', updateArtist)

module.exports = router
