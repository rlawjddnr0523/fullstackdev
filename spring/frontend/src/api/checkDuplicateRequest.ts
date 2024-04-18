import axios from "axios";

const checkDuplicateRequest = async (username: string) => {
    try {
        const response = await axios.get('http://localhost:8080/api/v1/logics/check-username-duplicate', {
            params: {
                username: username,
            }
        });
        console.log(response)
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error during the API Call', error);
    }
};

export default checkDuplicateRequest;