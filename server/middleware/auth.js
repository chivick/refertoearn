import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {
    try {
        
        const token = req?.headers?.authorization?.split(' ')[1]

        const userData = jwt.verify(token, 'test')

        if (userData?.id) {
            req.userId = userData?.id
            next()
        } else {
            throw new Error('Unauthorized access denied.')
        }

    } catch (error) {
        res.status(400).send(error.message)
    }
}

export default auth