const config = require('./config')
const Server = require('./server')

const { port } = config.server

const server = new Server()
server.run(port)
    .catch(console.error)
