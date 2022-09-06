const Router = require('express');
const router = Router();

const {createArtist, deleteArtist, readArtist, showArtist, updateArtist} = require('../controllers/artist.controller');

/**
 * @openapi
 * path:
 * /artist:
 *  get:
 *    description: return list artist
 *    summary: return list artist
 *    tags:
 *      - artist
 *    responses:
 *        200:
 *          description: return artists
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  artist:
 *                    type: array
 *                    items:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: integer
 *                          example: 1
 *                        name:
 *                          type: string
 *                          example: nombre artista
 *                        nickname:
 *                          type: string
 *                          example: nombra artistico
 *                        nationality:
 *                          type: string
 *                          example: nacinalidad
 *                        createdAt:
 *                          type: string
 *                          example: 2022-09-03T13:11:44.000Z
 *                        updateAt:
 *                          type: string
 *                          example: 2022-09-03T13:11:44.000Z
 *        404:
 *          description: artists not found
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  msg:
 *                    type: string
 *                    example: artistas no encontrados 
 */
router.get('/artists', readArtist);

/**
 * @openapi
 * path:
 * /artist/{id}:
 *  get:
 *    description: show artist by id
 *    summary: show artist by id
 *    tags:
 *      - artist
 *    responses:
 *      200:
 *        description: return artist
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  artista:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: int
 *                        example: 1
 *                      name:
 *                        type: string
 *                        example: nombre artista
 *                      nickname:
 *                        type: string
 *                        example: nombre artistico
 *                      nationality:
 *                        type: string
 *                        example: nacionalidad
 *                      updateAt:
 *                        type: data-time
 *                        example: 2022-09-02T23:45:46.751Z
 *                      createdAt:
 *                        type: data-time
 *                        example: 2022-09-02T23:45:46.751Z 
 *      404:
 *        description: artist not found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *                  example: artista no encontrado
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: int
 *        description: artista id
 */         
router.get('/artist/:id', showArtist);

/**
 * @openapi
 * path:
 * /artist:
 *   post:
 *     description: create artist
 *     summary: create artist
 *     tags:
 *       - artist
 *     responses:
 *       200:
 *        description: return artist
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                artist:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: int
 *                      example: 1
 *                    name:
 *                      type: string
 *                      example: Ciro Pertusi
 *                    nickname:
 *                      type: string
 *                      example: Attaque 77
 *                    nationality:
 *                      type: string
 *                      example: argentina
 *                    updateAt:
 *                      type: date-time
 *                      example: 2022-09-02T23:45:46.751Z
 *                    createdAt:
 *                      type: date-time
 *                      example: 2022-09-02T23:45:46.751Z  
 *                msg:
 *                  type: string
 *                  example: creado correctamente
 *       404:
 *        description: bad request
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *                  example: no se recibieron datos 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                format: varchar(50)
 *                example: nombre apellido
 *              nickname:
 *                type: string
 *                format: varchar(50)
 *                example: nombre artistico  
 *              nationality:
 *                type: string
 *                format: varchar(50)
 *                example: nacionalidad
*/
router.post('/artist', createArtist);

/**
 * @openapi
 * path:
 * /artist/{id}:
 *  post:
 *    description: update artist by id
 *    summary: update artist by id
 *    tags:
 *      - artist
 *    responses:
 *      200:
 *        description: update artist
 *      404:
 *        description: artist not found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *                  example: artista no encontrado
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: int
 *        description: artist id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               format: varchar(50)
 *               example: nombre apellido
 *             nickname:
 *               type: string
 *               format: varchar(50)
 *               example: nombre artistico  
 *             nationality:
 *               type: string
 *               format: varchar(50)
 *               example: nacionalidad           
 */
router.post('/artist/:id', updateArtist);

/**
 * @openapi
 * path:
 * /artist/{id}:
 *  delete:
 *    description: delete artist by id
 *    summary: delete artist by id
 *    tags:
 *      - artist
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: int
 *        description: artist id
 *    responses:
 *      200:
 *        description: delete artist
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *                  example: artista eliminado correctamente
 *      404:
 *        description: artist not found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *                  example: artista no encontrado   
 */
router.delete('/artist/:id', deleteArtist);

module.exports = router
