const Router = require('express');
const router = Router();

const{createTrack, showTrack, deleteTrack, updateTrack, readTrack} = require('../controllers/track.controller');

router.get('/track/:id', showTrack);

router.get('/tracks', readTrack);

router.post('/track', createTrack);

router.post('/track/:id', updateTrack);

router.delete('/track/:id', deleteTrack);

module.exports = router;