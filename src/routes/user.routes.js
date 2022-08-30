const Router = require('express');
const router = Router();

const {list, register, login} = require('../controllers/user.controller');

router.get('/users', list);

router.post('/user', register);

router.post('/login', login);

module.exports = router;