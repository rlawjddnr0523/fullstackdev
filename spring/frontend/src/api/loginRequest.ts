import axios from 'axios';

const sendLoginRequest = async (username: string, password: string) => {
    try {
        // Spring Boot 서버의 엔드포인트 URL
        const url = 'http://localhost:8080/api/v1/login';
        // 요청 본문 데이터
        const data = {
            username: username,
            password: password,
            // 여기에 필요한 데이터를 추가하세요
        };
        // POST 요청보내기
        const response = await axios.post(url, data);

        // 응답 데이터 출력
        console.log("응답 데이터 : ",response.data);
        return response.data;
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

export {
    sendLoginRequest
};