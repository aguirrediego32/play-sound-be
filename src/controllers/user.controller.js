require('dotenv').config();
const { User } = require('../database/models/index');
const sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

const list = async (req,res)=>{
    let users = await User.findAll();
    return res.status(200).json({
        status : '200',
        users
    })
}

const register = async (req, res)=>{
    let params = req.body;
    params.password = await bcrypt.hash(req.body.password, 10);
    let user = await User.create(params);
    if (user){
        return res.status(201).json({
            'status': 201,
            'msg': 'creado correctamente',
            user
        })
    } else {
        return res.status(404).json({
            'status': 404,
            'msg' : 'no se recibieron los datos',
        })
    }
}




module.exports = {
    list,
    register,
};