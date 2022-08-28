const Router = require('express');
const router = Router();

const {list, register} = require('../controllers/user.controller');

router.get('/', list);
router.post('/user', register);

module.exports = router;