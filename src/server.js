require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const {json} = require('body-parser');
const cookieParser = require('cookie-parser');

const swaggerConf = require('./config/swagger-conf');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();

const swaggerDoc = swaggerJsdoc(swaggerConf);

//Require routes
const router = require('./routes/user.routes');
const albumRouter = require('./routes/album.routes');
const artistRouter = require('./routes/artist.routes');
const trackRouter = require('./routes/track.routes');

//Settings
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(json());
app.use(cookieParser());

//Routes
app.use('/api-doc',swaggerUI.serve, swaggerUI.setup(swaggerDoc));
app.use('/', router);
app.use('/', albumRouter);
app.use('/', artistRouter);
app.use('/', trackRouter);

app.use((req,res,next)=>{
    res.status(404).json({
        status:'404',
        description:'página no encontrada'
    })
});

module.exports = app;