require('dotenv').config();
const {Artist} = require('../database/models/index');
const sequelize = require('sequelize');
const { json } = require('body-parser');

//Funciones
const createArtist = async (req,res) => {
    const params = req.body;
    let artist = await Artist.create(params);
    if(Artist) {
        return res.status(200).json({artist,'msg':'artista creado correctamente'})
    } else {
        return res.status(404).json({'msg': 'no se recibieron datos'})
    }
}

const deleteArtist = async (req,res) => {
    const id = req.params.id;
    let artist = await Artist.findByPk(id);
    if(artist){
        artist.destroy().then(() =>{
            return res.status(200).json({'msg': 'artista eliminado correctamente'})            
        })
    } else {
            return res.status(404).json({'msg': 'artista no encontrado'})
    }
}

const readArtist = async (req,res) => {
    const artist = await Artist.findAll();
    if(artist){
        return res.status(200).json({artist})
    } else {
        return res.status(404).json({'msg': 'no se encontraron artistas'})
    }
}

const showArtist = async (req,res)=> {
    const id = req.params.id;
    let artist = await Artist.findByPk(id);
    if(artist){
        return res.status(200).json({artist})
    } else {
        return res.status(404).json({'msg': 'no se encontro el artista '})
    }
}

const updateArtist = async (req, res) => {
    const id = req.params.id;
    let artist = await Artist.findByPk(id)
    const params = req.body;
    if(artist) {
        artist.name = params.name
        artist.nickname = params.nickname
        artist.nationality = params.nationality
        artist.save().then(artist =>{
            return res.status(200).json({ artist})
        })
    } else{
        return res.status(404).json({'msg': 'album no encontrado'})
    }
}
module.exports = {
    createArtist,
    deleteArtist,
    readArtist,
    showArtist,
    updateArtist
}