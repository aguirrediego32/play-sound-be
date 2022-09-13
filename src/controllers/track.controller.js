require('dotenv').config();
const { Track, Album, Artist } = require('../database/models/index');
const multer = require('multer');
const { containerClient } = require('../config/blobstorage-config')
const { v1: uuidv1} = require('uuid');

//Funciones
const createTrack = async (req,res) => {
    const storage = multer.memoryStorage();
    const upload = multer({
        storage,
        limits: {
            fields: 4,
            fileSize: 10000000,
            files: 1
        }
    });

    upload.single('tracksrc')(req,res, async (err) => {
        if(err){
            return res.status(400).json({msg:err.message})
        } else {
            const { name, duration, albumId, artistId } = req.body;

            const artist = await Artist.findByPk(artistId);
            if(!artist){
                return res.status(404).json({'msg':'artista no encontrado'});
            }
            const album = await Album.findByPk(albumId);
            if(!album){
                return res.status(404).json({'msg':'album no encontrado'});
            }
            
            // Create a unique name for the blob
            const blobName = `${uuidv1()}_${req.file.originalname}`

            // Get a block blob client
            const blockBlobClient = containerClient.getBlockBlobClient(blobName);

            // console.log("\nUploading to Azure storage as blob:\n\t", blobName);

            // Upload data to the blob
            // console.log('FILE ---->',req.file)
            const data = req.file.buffer;
            const uploadBlobResponse = blockBlobClient.upload(data, data.length);
            console.log(
                "Blob was uploaded successfully. requestId: ",
                uploadBlobResponse.requestId
            );
            
            const baseUrl = process.env.TRACK_BASE_URL
            const url = `${process.env.TRACK_BASE_URL}${blobName}`

            const params = {
                name,
                duration,
                url,
                albumId,
                artistId
            }

            let track = await Track.create(params);

            if(track){
                return res.status(200).json({track,'msg':'canción creada correctamente'});
            } else {
                return res.status(400).json({'msg': 'no se recibieron datos'});
            }
        }
    })
}

const showTrack = async (req,res) => {
    const id = req.params.id;
    let track = await Track.findByPk(id);
    if(track){
        return res.status(200).json({track});
    } else {
        return res.status(404).json({'msg': 'canción no encontrada'});
    }
}

const deleteTrack = async (req,res) => {
    const id = req.params.id;
    let track = await Track.findByPk(id);
    if(track){
        track.destroy().then(() =>{
            return res.status(200).json({'msg':'canción eliminada correctamente'});      
        })  
    } else {
        return res.status(404).json({'msg': 'canción no encontrada'});
    }
}

const updateTrack = async (req,res) => {
    const id = req.params.id;
    let track = await Track.findByPk(id);
    const params = req.body;
    if(track) {
        track.name = params.name;
        track.albumId = params.albumId;
        track.cover = params.cover;
        track.artistId = params.artistId;
        track.duration = params.duration;
        track.url = params.url;
        track.save().then(track =>{
            return res.status(200).json({track});
        })
    } else {
            return res.status(404).json({'msg':'canción no encontrada'});
    }
}

const readTrack = async (req,res) => {
    let src = req.query.src
    if(!src){src = ''}else{src = src.toLowerCase()}
    console.log(src);
    let tracks = await Track.findAll({
        include:[
        {
            model: Album,
        },
        {
            model: Artist,
            attributes:['name', 'nickname', 'nationality'],
        }]
    });
    if(tracks) {
        tracks = tracks.filter( (t) => 
            t.name.toLowerCase().includes(src) ||
            t.Album.description.toLowerCase().includes(src) ||
            t.Artist.name.toLowerCase().includes(src));
        return res.status(200).json({tracks});
    } else {
        return res.status(409).json({'msg': 'no se encontraron canciones'});
    }
}

module.exports = {
    createTrack,
    showTrack,
    deleteTrack,
    updateTrack,
    readTrack
}

