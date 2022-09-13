const jwt = require('jsonwebtoken')
const { User } = require('../database/models/index')

const isAuthenticated = async (req, res, next) => {
    // Comprobar si existe el token y esta autenticado
    const token = req.headers.authorization.split(' ').pop();

    console.log('token ------> 🔴🔴🔴',token);

    if(!token){
        return res.status(401).json({msg:'Debe iniciar sesion para continuar'});
    }

    try{
        // Leer token
        const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        // Buscar usuario por email
        const datos = await User.findOne({where:{email:decoded.email}})
        if(datos){
            User.findByPk(datos.dataValues.id).then(user => {
                req.user = { id: user.id, name: user.name, email: user.email, role: user.role };
                next();
            })
        } else {
            return res.status(500).json({msg:'Error al decodificar el token'});
        }
    } catch(err) {
        return res.status(500).json(err.message);
    }
}

module.exports = {
    isAuthenticated
}