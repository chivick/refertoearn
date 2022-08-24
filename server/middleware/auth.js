import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {
    try {
        
        const token = req.headers.authorization.split(' ')[1]

        const userData = jwt.verify(token, 'test')

        req.userId = userData?.id

        next()

    } catch (error) {
        console.log(error)
    }
}

export default auth