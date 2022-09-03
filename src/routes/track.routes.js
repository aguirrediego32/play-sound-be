const Router = require('express');
const router = Router();

const{createTrack, showTrack, deleteTrack, updateTrack, readTrack} = require('../controllers/track.controller');

router.post('/track', createTrack);

router.post('/track/:id', updateTrack);

router.get('/track/:id', showTrack);

router.get('/tracks', readTrack);

router.delete('/track/:id', deleteTrack);

module.exports = router;