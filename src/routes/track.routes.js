const Router = require('express');
const router = Router();

const{createTrack, showTrack, deleteTrack, updateTrack, readTrack} = require('../controllers/track.controller');

/**
 * @openapi
 * path:
 * /track/{id}:
 *  get:
 *    description: show track by id
 *    summary: show track by id
 *    tags:
 *      - track
 *    responses:
 *      200:
 *        description: return track
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  track:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: int
 *                        example: 1
 *                      name:
 *                        type: string
 *                        example: nombre cancion
 *                      albumId:
 *                        type: integer
 *                        example: 1
 *                      cover:
 *                        type: string
 *                        example: no disponible
 *                      artistId:
 *                        type: integer
 *                        example: 2
 *                      duration:
 *                        type: integer
 *                        example: 200
 *                      url:
 *                        type: string
 *                        example: no disponible
 *                      updateAt:
 *                        type: data-time
 *                        example: 2022-09-02T23:45:46.751Z
 *                      createdAt:
 *                        type: data-time
 *                        example: 2022-09-02T23:45:46.751Z 
 *      404:
 *        description: track not found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *                  example: cancion no encontrado
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: int
 *        description: track id
 */         
router.get('/track/:id', showTrack);

/**
 * @openapi
 * path:
 * /tracks:
 *  get:
 *    description: return list tracks
 *    summary: return list tracks
 *    tags:
 *      - track
 *    responses:
 *        200:
 *          description: return list tracks
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  track:
 *                    type: array
 *                    items:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: integer
 *                          example: 1
 *                        name:
 *                          type: string
 *                          example: ramas desnudas
 *                        albumId:
 *                          type: integer
 *                          example: 6
 *                        cover:
 *                          type: string
 *                          example: no
 *                        artistId:
 *                         type: integer
 *                         example: 1
 *                        duration:
 *                          type: integer
 *                          example: 300
 *                        url:
 *                          type: string
 *                          example: "no disponible"
 *                        createdAt:
 *                          type: string
 *                          example: 2022-09-03T13:11:44.000Z
 *                        updateAt:
 *                          type: string
 *                          example: 2022-09-03T13:11:44.000Z
 *        404:
 *          description: tracks not found
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  msg:
 *                    type: string
 *                    example: canciones no encontrados
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: int
 *        description: track id  
 */
router.get('/tracks', readTrack);

/**
 * @openapi
 * path:
 * /track:
 *  post:
 *    description: create track
 *    summary: create track
 *    tags:
 *      - track
 *    responses:
 *      200:
 *        description: return track
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                track:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: int
 *                      example: 1
 *                    name:
 *                      type: string
 *                      example: porco rex
 *                    albumId:
 *                      type: integer
 *                      example: 1
 *                    cover:
 *                      type: string
 *                      example: no
 *                    artistId:
 *                      type: integer
 *                      example: 2
 *                    duration:
 *                      type: integer
 *                      example: 200
 *                    url:
 *                      type: string
 *                      example: no disponible
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
 *              name:
 *                type: string
 *                format: varchar(50)
 *                example: nombre cancion
 *              albumId:
 *                type: integer
 *                format: int
 *                example: 1
 *              cover:
 *                type: string
 *                format: varchar(50)
 *                example: no disponible
 *              artistId:
 *                type: integer
 *                format: int
 *                example: 1
 *              duration:
 *                type: integer
 *                format: int
 *                example: 200
 *              url:
 *                type: string
 *                format: bigint
 *                example: no disponible
 */
router.post('/track', createTrack);

/**
 * @openapi
 * path:
 * /track/{id}:
 *  post:
 *    description: update track by id
 *    summary: update track by id
 *    tags:
 *      - track
 *    responses:
 *      200:
 *        description: return track
 *      404:
 *        description: track not found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *                  example: cancion no encontrado
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: int
 *        description: track id             
 */
router.post('/track/:id', updateTrack);

/**
 * @openapi
 * path:
 * /track/{id}:
 *  delete:
 *    description: delete track by id
 *    summary: delete track by id
 *    tags:
 *      - track
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: int
 *        description: track id
 *    responses:
 *      200:
 *        description: delete track
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *                  example: cancion eliminado correctamente
 *      404:
 *        description: track not found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *                  example: cancion no encontrado   
 */
router.delete('/track/:id', deleteTrack);

module.exports = router;