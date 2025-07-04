import { ApiError } from "../utils/ApiError.js"
export const registerUser = () => {
    const { username, fullName, password, email, gender } = req.body;
    if (!username || !email) {
        throw new ApiError(401, "please provide username or email from login ")
    }


}