import { User } from "@/models/Users"

export const createUser = async (req, res) => {
    const { email, password } = req.body

    const response = await User.create({ email, password })

    res.status(201).json({
        message: 'ok',
        data: response
    })
}