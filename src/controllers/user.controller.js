require('dotenv').config();
const { User } = require('../database/models/index');
const sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const list = async (req,res)=>{
    let users = await User.findAll({ attributes:['name', 'email', 'role'] });
    return res.status(200).json( { users } );
}

const register = async (req, res)=>{
    let params = req.body;
    params.password = await bcrypt.hash(req.body.password, 10);
    let user = await User.create(params);
    if (user){
        return res.status(201).json({ 'msg': 'creado correctamente', user });
    } else {
        return res.status(404).json({ 'msg' : 'no se recibieron los datos' });
    }
}

const login = async (req, res) => {
    const {email, password} = req.body;
    // Check email on DB
    User.findOne({where:{email:email}})
    .then(user=>{
        if(!user){
            // Invalid email
            res.status(404).json({msg:'Email invalido'});
        } else {
            bcrypt.compare(password, user.password,(err, data) => {
                if(err) throw err;
                if(data){
                    // Set token
                    let token = jwt.sign({id:user.id, email:user.email, role:user.role},process.env.ACCESS_TOKEN_SECRET, {expiresIn: '3d'});

                    const cookiesOptions = {
                        expire: new Date(Date.now + process.env.TOKEN_EXPIRES * 24 * 60 * 60 * 60 * 1000),
                        httpOnly: true
                    }
                    res.cookie('jwt', token, cookiesOptions);

                    return res.status(200).json({user, token});
                }else{
                    // Access denie - User or password is invalid
                    return res.status(401).json({ msg: 'Usuario y/o contraseña incorrecta' });
                }
            })   
        }
    })
    .catch(err=>{
        // Fail to search email
        return res.status(500).json(err.message);
    })
}

const logout = async (req, res) => {
    // Elimiran cookie jwt
    res.clearCookie('jwt');
    // redirigir al login
    return res.redirect('/login');
}

module.exports = {
    list,
    register,
    login,
    logout
};