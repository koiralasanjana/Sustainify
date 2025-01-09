import { myAxios } from "./helper";

class AuthService {

    login(credentials) {
        return myAxios.post('/login', credentials) // `/login` appends to baseURL
            .then(response => response.data) // Optional: Extract data
            .catch(error => {
                throw error; // Rethrow to handle it in the calling code
            });
    }
}

// Export an instance of AuthService
export default new AuthService();
