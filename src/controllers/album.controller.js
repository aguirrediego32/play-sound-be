const {Album} = require('../database/models/index');

//Funciones
const createAlbum = async (req,res) => {
    const params = req.body;
    let album = await Album.create(params);
    if(album){
        return res.status(200).json({ album, 'msg': 'creado correctamente'});
    } else {
        return res.status(400).json({ 'msg': 'no se recibieron datos'});
    }
};

const deleteAlbum = async (req, res) => {
    const id = req.params.id;
    let album = await Album.findByPk(id);
    if(album) {
        album.destroy().then(() => {
            return res.status(200).json({'msg': 'album eliminado correctamente'});
        }) 
    } else {
        return res.status(404).json({ 'msg': 'album no encontrado'});
    }
}

const readAlbum = async (req, res)=> {
    let albums =  await Album.findAll();
    if(albums){
        return res.status(200).json({albums});
    } else {
        return res.status(404).json({'msg': 'no se encontraron albumnes'});
    }
};

const showAlbum = async (req, res) => {
    const id = req.params.id;
    let album = await Album.findByPk(id);
    if(album) {
        return res.status(200).json({album});
    } else {
        return res.status(404).json({'msg': 'no se encontro el album'});
    }
}

const updateAlbum = async (req, res) => {
    const id = req.params.id;
    let album = await Album.findByPk(id);
    const params = req.body;
    if(album) {
        album.description = params.description;
        album.save().then(album =>{
            return res.status(200).json({ album});
        })
    } else{
        return res.status(404).json({'msg': 'album no encontrado'});
    }
}

module.exports = {
    createAlbum,
    readAlbum,
    updateAlbum,
    deleteAlbum,
    showAlbum
}