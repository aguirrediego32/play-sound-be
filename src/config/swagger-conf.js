const swaggerConf = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API PlaySound',
            description: 'API PlaySound',
            version: '1.0.0',
        }
    },
    apis: ['./src/routes/*.js']
}

module.exports = swaggerConf