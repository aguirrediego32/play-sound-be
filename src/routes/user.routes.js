const Router = require('express');
const router = Router();

const { list, register, login, logout } = require('../controllers/user.controller');

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
 *      200:
 *        description: return token
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                users:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      name:
 *                        type: string
 *                        example: Juan Perez
 *                      email:
 *                        type: email
 *                        example: email@email.com
 *                      role: 
 *                        type: string
 *                        example: user
 */
 router.get('/users', list);

 /**
 * @openapi
 * path:
 * /logout:
 *  get:
 *    description: user logout
 *    summary: user logout
 *    tags:
 *      - users
 */
 router.get('/logout', logout);

/**
 * @openapi
 * path:
 * /register:
 *  post:
 *    description: register user
 *    summary: register user
 *    tags:
 *      - users
 *    requestBody:
 *      required: true
 *      content:
 *        aplication/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Jhon Smith
 *              email:
 *                type: email
 *                example: email@email.com
 *              password:
 *                type: password
 *                example: secret
 *    responses:
 *      201:
 *        description: user register success
 *        content:
 *          aplication/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *                  example: creado correctamente
 *      404:
 *        description: bad request
 *        content:
 *          aplication/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *                  example: no se recibieron los datos
 */
router.post('/user', register);

/**
 * @openapi
 * path:
 * /login:
 *  post:
 *    description: user login
 *    summary: user login
 *    tags:
 *      - users
 *    requestBody:
 *      required: true
 *      content:
 *        aplication/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: email
 *                example: email@email.com
 *              password:
 *                type: password
 *                example: secret
 *    responses:
 *      201:
 *        description: user logged success
 *        content:
 *          aplication/json:
 *            schema:
 *              type: object
 *              properties:
 *                token:
 *                  type: string
 *                  example: token
 *      401:
 *        description: invalid email or user
 *        content:
 *          aplication/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *                  example: Usuario y/o contraseña incorrecta
 *      404:
 *        description: email not registered
 *        content:
 *          aplication/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *                  example: email no registrado
 */
router.post('/login', login);

module.exports = router;