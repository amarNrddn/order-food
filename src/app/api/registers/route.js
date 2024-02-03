import { User } from "@/models/Users"

export const createUser = async (req) => {
    const body = await req.body.json()

    const createdUser = await User.create(body);
    return Response.json(createdUser);  
}