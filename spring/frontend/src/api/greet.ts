import axios from 'axios';

async function sendRequest() {
    try {
        // Spring Boot 서버의 엔드포인트 URL
        const url = 'http://localhost:8080/greeting';

        // 요청 본문 데이터
        const data = {
            key: 'val',
            // 여기에 필요한 데이터를 추가하세요
        };

        // POST 요청보내기
        const response = await axios.post(url, data);

        // 응답 데이터 출력
        console.log("응답 데이터 : ",response.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // Axios 에러 처리
            console.error('Axios 에러 : ', error.message)
        } else {
            // 기타 에러 처리
            console.error('기타 에러 : ', error);
        }
    }
}

export {
    sendRequest
};