//def
const express = require('express')

//router
const router = require('./src/routers/index')
const cors = require('cors')

function errorHandler(err, req, res, next){
//TODO - ApiError

//     if (err instanceof ApiError){
//         return res.status(err.statusCode).json({
//             msg: err.message
//         })
//     }
    return res.status(500).json({
        msg: 'Something broke..',
        err: err
    })
}

class Server{
    constructor() {
        this.app = express()
        this.setup()
    }

    setup(){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use('/api', router)
        this.app.use(errorHandler)
    }

    async run(port){
        //TODO - db auth
        this.app.listen(port, ()=>{
            console.log(`\n\t*** Server running on port ${port}***`)
        })
    }
}

module.exports = Server
