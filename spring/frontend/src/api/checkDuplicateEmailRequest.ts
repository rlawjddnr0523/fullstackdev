import axios from "axios";

const checkDuplicateEmailRequest = async (email: String) => {
    try {
        const response = await axios.get('http://localhost:8080/api/v1/logics/check-email-duplicate', {
            params: {
                email: email,
            }
        });
        // console.log(response)
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error during the API Call', error);
        return 'error';
    }
};

export default checkDuplicateEmailRequest;