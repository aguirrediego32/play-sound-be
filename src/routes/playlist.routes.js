const Router = require('express');
const router = Router();

const {createPlaylist, deletePlaylist, updatePlaylist, readPlaylist, showPlaylist, showPlaylistTracks, addTrackToPlaylist} = require('../controllers/playlist.controller');
const {isAuthenticated} = require('../middlewares/UserAuthenticated')

/**
 * @openapi
 * path: 
 * /playliststracks/{id}:
 *  get:
 *    description: Show tracks from a playlist
 *    summary: Show tracks from a playlist
 *    tags:
 *      - playlist
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: int
 *        description: Id
 *    responses:
 *      200:
 *        description: Return tracks from a playlist
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                tracks: 
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties: 
 *                      playlistId: 
 *                        type: int
 *                        example: 1
 *                      trackId:
 *                        type: int
 *                        example: 1
 *                      createdAt:
 *                        type: datetime
 *                        example: 2022-09-03T02:04:36.000Z
 *                      updatedAt:
 *                        type: datetime
 *                        example: 2022-09-03T02:04:36.000Z
 *                      id:
 *                        type: int
 *                        example: 1
 *                      track:
 *                        type: object
 *                        properties:
 *                          id:
 *                            type: int
 *                            example: 1
 *                          name:
 *                            type: string
 *                            example: "cancion 1"
 *                          albumId:
 *                            type: int
 *                            example: 1
 *                          cover: 
 *                            type: string
 *                            example: 1
 *                          artistId:
 *                            type: int
 *                            example: 1
 *                          duration:
 *                            type: int
 *                            example: 300
 *                          url:
 *                            type: string
 *                            example: wwww.youtube.com
 *                          createdAt:
 *                            type: datetime
 *                            example: 2022-09-03T02:04:36.000Z
 *                          updatedAt:
 *                            type: datetime
 *                            example: 2022-09-03T02:04:36.000Z
 *      404:
 *        description: Playlist not found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg: 
 *                  type: string
 *                  example: Playlist not found
 */
router.get('/playliststracks/:id', showPlaylistTracks);

/**
 * @openapi
 * path: 
 * /playlists/{userId}:
 *  get:
 *    description: Read all playlists from a user
 *    summary: Read all playlists from a user
 *    tags:
 *      - playlist
 *    parameters:
 *      - in: path
 *        name: userId
 *        required: true
 *        schema:
 *          type: int
 *        description: User Id
 *    responses:
 *      200:
 *        description: Return all Playlists from a user
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                playlists: 
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties: 
 *                      id: 
 *                        type: integer
 *                        example: 1
 *                      name:
 *                        type: string
 *                        example: pop de los 90
 *                      userId:
 *                        type: integer
 *                        example: 1
 *                      createdAt:
 *                        type: datetime
 *                        example: 2022-09-03T02:04:36.000Z
 *                      updatedAt:
 *                        type: datetime
 *                        example: 2022-09-03T02:04:36.000Z
 *      400:
 *        description: User does not exist
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg: 
 *                  type: string
 *                  example: User does not exist
 *      404:
 *        description: Playlist not found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg: 
 *                  type: string
 *                  example: Playlist not found
 */
router.get('/playlists/', isAuthenticated ,readPlaylist);

/**
 * @openapi
 * path: 
 * /playlists/{id}:
 *  get:
 *    description: Show a playlist from a user
 *    summary: Show a playlist from a user
 *    tags:
 *      - playlist
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: int
 *        description: id
 *    responses:
 *      200:
 *        description: Show a playlist from a user
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                playlists: 
 *                  type: object
 *                  properties: 
 *                    id: 
 *                      type: integer
 *                      example: 1
 *                    name:
 *                      type: string
 *                      example: rock nacional
 *                    userId:
 *                      type: integer
 *                      example: 1
 *                    createdAt:
 *                      type: datetime
 *                      example: 2022-09-03T02:04:36.000Z
 *                    updatedAt:
 *                      type: datetime
 *                      example: 2022-09-03T02:04:36.000Z
 *      404:
 *        description: Playlist not found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg: 
 *                  type: string
 *                  example: Playlist not found
 */
router.get('/playlist/:id', showPlaylist);

/**
 * @openapi
 * path: 
 * /playlists:
 *  post:
 *    description: Create a playlist from a user
 *    summary: Create a playlist from a user
 *    tags:
 *      - playlist
 *    responses:
 *      201:
 *        description: Playlist created correctly
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg: 
 *                  type: string
 *                  example: Playlist created correctly
 *      400:
 *        description: Data has not been received
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg: 
 *                  type: string
 *                  example: Data has not been received
 *      404:
 *        description: User does not exist
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg: 
 *                  type: string
 *                  example: User does not exist
 */
router.post('/playlist', isAuthenticated, createPlaylist);

/**
 * @openapi
 * path: 
 * /playlist/{id}:
 *  post:
 *    description: Update a playlist from a user
 *    summary: Update a playlist from a user
 *    tags:
 *      - playlist
 *    parameters:
 *      - in: path
 *        name: userId
 *        required: true
 *        schema:
 *          type: int
 *        description: User Id
 *    responses:
 *      200:
 *        description: Return all Playlists from a user
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                playlists: 
 *                  type: object
 *                  properties: 
 *                    id: 
 *                      type: integer
 *                      example: 1
 *                    name:
 *                      type: string
 *                      example: rock nacional
 *                    userId:
 *                      type: integer
 *                      example: 1
 *                    createdAt:
 *                      type: datetime
 *                      example: 2022-09-03T02:04:36.000Z
 *                    updatedAt:
 *                      type: datetime
 *                      example: 2022-09-03T02:04:36.000Z
 *      404:
 *        description: Playlist not found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg: 
 *                  type: string
 *                  example: Playlist not found
 */
router.post('/playlist/:id', updatePlaylist);

/**
 * @openapi
 * path: 
 * /playliststracks:
 *  post:
 *    description: Add a track to a playlist from a user
 *    summary: Add a track to a playlist from a user
 *    tags:
 *      - playliststracks
 *    parameters:
 *      - in: path
 *        name: playlistId
 *        required: true
 *        schema:
 *          type: int
 *        description: playlist Id
 *      - in: path
 *        name: trackId
 *        required: true
 *        schema:
 *          type: int
 *        description: track Id
 *    responses:
 *      200:
 *        description: Return all Playlists from a user
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                playlists: 
 *                  type: object
 *                  properties: 
 *                    playlistId: 
 *                      type: integer
 *                      example: 1
 *                    trackId:
 *                      type: integer
 *                      example: 1
 *                    updatedAt:
 *                      type: datetime
 *                      example: 2022-09-03T02:04:36.000Z
 *                    createdAt:
 *                      type: datetime
 *                      example: 2022-09-03T02:04:36.000Z
 *                    id:
 *                      type: integer
 *                      example: 1
 *      404:
 *        description: Track can not be added
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg: 
 *                  type: string
 *                  example: Track can not be added
 */
router.post('/playliststracks', addTrackToPlaylist);

/**
 * @openapi
 * path: 
 * /playlist:
 *  delete:
 *    description: Delete a playlist from a user
 *    summary: Delete a playlist from a user
 *    tags:
 *      - playlist
 *    responses:
 *      200:
 *        description: Playlist deleted correctly
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg: 
 *                  type: string
 *                  example: Playlist deleted correctly
 *      404:
 *        description: Playlist not found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg: 
 *                  type: string
 *                  example: Playlist not found
 */
router.delete('/playlist', deletePlaylist);


module.exports = router;