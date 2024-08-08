class BaseController {
    constructor(req, res, next) {
        this._req = req
        this._res = res
        this._next = next
    }
}

module.exports = BaseController
