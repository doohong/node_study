const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers['x-access-token'] || req.query.token

    // token does not exist
    if(!token) {
        return res.status(401).json({
            success: false,
            message: 'not logged in'
        })
    }
    const p = new Promise(
        (resolve, reject) => {
            jwt.verify(token, 'zzz', (err, decoded) => {
                if(err) reject(err)
                console.log(decoded)
                req.decoded = decoded
                resolve(decoded)
            })
        }
    )

    const onError = (error) => {
        res.status(403).json({
            success: false,
            message: error.message
        })
    }

    p.then((decoded) => {
        req.decoded = decoded
        next()
    }).catch(onError)
}
module.exports = authMiddleware

