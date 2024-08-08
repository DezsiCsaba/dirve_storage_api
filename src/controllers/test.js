const BaseController = require('./base')

class TestController extends BaseController{
    async givePulse(){
        this._res.json({
            msg: 'Hello World!'
        })
    }
}

module.exports = TestController
