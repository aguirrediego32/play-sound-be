const Router = require('express');
const router = Router();

const {list, register} = require('../controllers/user.controller');

/**
 * @openapi
 * path:
 * /:
 *  get:
 *    description: list users
 *    summary: list user
 *    tags:
 *      - users
 *    responses:
 *        200:
 *         description: return token
 */
router.get('/', list);

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

module.exports = router;