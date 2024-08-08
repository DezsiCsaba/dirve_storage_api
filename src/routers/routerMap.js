const TestController = require('../controllers/test')

const routingMap = [
    {
        method: 'get',
        path: '/test',
        controller: TestController,
        action: 'givePulse'
    },
]

module.exports = routingMap
