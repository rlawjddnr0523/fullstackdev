import axios from 'axios';

const checkSessionRequest = async () => {
    try {
        // Spring Boot 서버의 엔드포인트 URL
        const url = 'http://localhost:8080/api/v1/login-status';

        // POST 요청보내기
        const response = await axios.get(url);

        // 응답 데이터 출력
        if (response.status === 200) {
            return response.status;
        } else if (response.status === 202) {
            return response.status;
        } else if (response.status === 400) {
            return response.status;
        }
        console.log("응답 데이터 : ",response.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // Axios 에러 처리
            console.error('Axios 에러 : ', error.message);
            return 'AxiosError';
        } else {
            // 기타 에러 처리
            console.error('기타 에러 : ', error);
            return 'ETCError'
        }
    }
};

export {checkSessionRequest};