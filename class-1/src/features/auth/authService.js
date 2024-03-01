import axios from "axios";

const API_URL = 'https://ruby-concerned-grasshopper.cyclic.app/api/users'

// Create the request to BE that creates a user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    return response.data
}

const authService = {
    register
}

export default authService