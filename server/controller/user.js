import UserModel from "../model/user"

export const addNewUser = async(req, res) => {

    try {
        const { fullname, email, password, referrer } = req.body

        const newUser = { fullname, email, password, referrer }

        await UserModel.create(newUser)

        res.json({ ...newUser })

    } catch (error) {

        res.status(400).json({ message: error.message })

    }
    

}