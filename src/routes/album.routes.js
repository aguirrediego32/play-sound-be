const Router = require('express');
const router = Router();

const {createAlbum,readAlbum,updateAlbum,deleteAlbum, showAlbum} = require('../controllers/album.controller');

/**
 * @openapi
 * path:
 * /albums:
 *  get:
 *    description: return list album
 *    summary: return list album
 *    tags:
 *      - album
 *    responses:
 *        200:
 *          description: return album
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  album:
 *                    type: array
 *                    items:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: integer
 *                          example: 1
 *                        description:
 *                          type: string
 *                          example: porco rex
 *                        createdAt:
 *                          type: string
 *                          example: 2022-09-03T13:11:44.000Z
 *                        updateAt:
 *                          type: string
 *                          example: 2022-09-03T13:11:44.000Z
 *        404:
 *          description: albums not found
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  msg:
 *                    type: string
 *                    example: albumnes no encontrados 
 */
router.get('/albums', readAlbum);

/**
 * @openapi
 * path:
 * /album/{id}:
 *  get:
 *    description: show album by id
 *    summary: show album by id
 *    tags:
 *      - album
 *    responses:
 *      200:
 *        description: return album
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  album:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: int
 *                        example: 1
 *                      description:
 *                        type: string
 *                        example: porco rex
 *                      updateAt:
 *                        type: data-time
 *                        example: 2022-09-02T23:45:46.751Z
 *                      createdAt:
 *                        type: data-time
 *                        example: 2022-09-02T23:45:46.751Z 
 *      404:
 *        description: album not found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *                  example: album no encontrado
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: int
 *        description: album id
 */         
router.get('/album/:id', showAlbum);

/**
 * @openapi
 * path:
 * /album:
 *  post:
 *    description: create album
 *    summary: create album
 *    tags:
 *      - album
 *    responses:
 *      200:
 *        description: return album
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                album:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: int
 *                      example: 1
 *                    description:
 *                      type: string
 *                      example: porco rex
 *                    updateAt:
 *                      type: date-time
 *                      example: 2022-09-02T23:45:46.751Z
 *                    createdAt:
 *                      type: date-time
 *                      example: 2022-09-02T23:45:46.751Z  
 *                msg:
 *                  type: string
 *                  example: creado correctamente
 *      400:
 *        description: bad request
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *                  example: no se recibieron datos
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              description:
 *                type: string
 *                format: varchar(50)
 *                example: ejemplo
 */
router.post('/album', createAlbum);

/**
 * @openapi
 * path:
 * /album/{id}:
 *  post:
 *    description: update album by id
 *    summary: update album by id
 *    tags:
 *      - album
 *    responses:
 *      200:
 *        description: return albums
 *      404:
 *        description: album not found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *                  example: album no encontrado
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: int
 *        description: album id             
 */
router.post('/album/:id', updateAlbum);

/**
 * @openapi
 * path:
 * /album/{id}:
 *  delete:
 *    description: delete album by id
 *    summary: delete album by id
 *    tags:
 *      - album
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: int
 *        description: album id
 *    responses:
 *      200:
 *        description: return albums
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *                  example: album eliminado correctamente
 *      404:
 *        description: album not found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *                  example: album no encontrado   
 */
router.delete('/album/:id', deleteAlbum);

module.exports = router;