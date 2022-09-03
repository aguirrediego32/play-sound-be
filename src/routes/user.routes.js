const Router = require('express');
const router = Router();

const {list, register, login} = require('../controllers/user.controller');

/**
 * @openapi
 * path:
 * /users:
 *  get:
 *    description: list users
 *    summary: list user
 *    tags:
 *      - users
 *    responses:
 *        200:
 *         description: return token
 */
 router.get('/users', list);

/**
 * @openapi
 * path:
 * /register:
 *  post:
 *    description: register user
 *    summary: register user
 *    tags:
 *      - users
 *    responses:
 *        201:
 *         description: create
 *        404:
 *          description: bad request
 */
router.post('/user', register);

router.post('/login', login);

module.exports = router;