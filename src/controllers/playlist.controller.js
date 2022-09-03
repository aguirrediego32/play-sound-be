const { Playlist, User, Track, PlaylistsTracks } = require('../database/models/index');
const sequelize = require('sequelize');
const { param } = require('../routes/playlist.routes');
const { restart } = require('nodemon');
const { json } = require('body-parser');

const createPlaylist = async (req, res) => {
    const params = req.body;
    const user = await User.findByPk(params.userId);
    if(user) {
        const playlist = await Playlist.create(params);
        if (playlist) {
            return res.status(201).json({msg:'Playlist created correctly'});
        } else {
            return res.status(400).json({msg:'Data has not been received'});
        }
    } else {
        return res.status(404).json({msg:'User does not exist'});
    }
    
};

const deletePlaylist = async (req, res) => {
    const params = req.body;
    const playlist = await Playlist.findByPk(params.id);
    if(playlist) {
        playlist.destroy().then(() => {
            return res.status(200).json({msg: 'Playlist deleted correctly'});
        }) 
    } else {
        return res.status(404).json({ msg: 'Playlist not found'});
    }
}

const updatePlaylist = async (req, res) => {
    const id = req.params.id;
    const playlist = await Playlist.findByPk(id);
    const params = req.body;
    if(playlist) {
        playlist.name = params.name;
        playlist.save(playlist).then(playlist => 
            {return res.status(200).json({playlist});
        })
    } else {
        return res.status(404).json({msg: 'Playlist not found'});
    }
}

const readPlaylist = async (req, res) => {
    const userId = req.params.userId;
    const user = await User.findByPk(userId);
    if (!user) {
        return res.status(400).json({msg:'User does not exist'});
    }
    let playlist = await Playlist.findAll({where: {userId:userId}});
    if(playlist) {
        return res.status(200).json({playlist});
    } else {
        return res.status(404).json({msg: "Playlist not found"});
    }
}

const showPlaylist = async (req, res) => {
    const id = req.params.id;
    let playlist = await Playlist.findByPk(id);
    if(playlist) {
        return res.status(200).json({playlist});
    } else {
        return res.status(404).json({msg: "Playlist not found"});
    }
}

const showPlaylistTracks = async (req, res) => {
    const id = req.params.id
    let playlist = await Playlist.findByPk(id)
    if (!playlist) {
        return res.status(404).json({msg: "Playlist not found"});
    }
    let tracks = await PlaylistsTracks.findAll({
        where: {playlistId:id},
        include:Track
    });
    if(tracks) {
        return res.status(200).json({tracks});
    } 
}

const addTrackToPlaylist = async (req, res) => {
    const params = req.body;
    const playlist = await Playlist.findByPk(params.playlistId);
    if(!playlist){
        return res.status(404).json({'msg':'Playlist not found'});
    }
    const track = await Track.findByPk(params.trackId);
    if(!track){
        return res.status(404).json({'msg':'Track not found'});
    }
    const playlistTrack = await PlaylistsTracks.create(params);
    if(playlistTrack) {
        return res.status(200).json({playlistTrack});
    } else {
        return res.status(404).json({msg: 'Track can not be added'});
    }
}

module.exports = {
    createPlaylist,
    deletePlaylist,
    updatePlaylist,
    readPlaylist,
    showPlaylist,
    showPlaylistTracks,
    addTrackToPlaylist
}