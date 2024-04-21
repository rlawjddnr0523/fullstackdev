import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const WelcomeSection = () => {
    return (
        <>
            {/* Welcome Section */}
            <Col>
                <Row>
                    <Col className='fs-1 fw-bold'>TwoPP 에 오신 것을 환영합니다!</Col>
                </Row>
                <Row className='flex-column'>
                    <Col className='fs-5 fw-lighter lh-lg'>게시물 작성, 댓글 달기 또는 친구추가 등의 다양한 기능을 통해 TwoPP 에서 소통하세요!</Col>
                    <Col className='fs-6 fw-medium lh-lg'>TwoPP 에서는 다양한 주제와 관심사에 관한 게시물을 찾을 수 있습니다!</Col>
                    <Col className='fs-6 fw-medium lh-lg'>또한 저희 TwoPP 는 사용자의 개인정보를 가장 중요하게 생각하며, 철저한 익명성, 암호화등을 거치고 있습니다.</Col>
                    <Col className='fs-6 fw-medium lh-lg'>운영자는 친밀한 커뮤니티 분위기를 조성하여 사용자들이 서로를 이해하고 지지 할 수 있는 공간을 제공하고 있습니다.</Col>
                </Row>
            </Col>
        </>
    )
}
const EventSection = () => {
    return (
        <>
            {/* Event Section */}
            <Col className="d-flex justify-content-between mt-3">
                <Col className="mt-3">
                    <Card className="border">
                        <Card.Body>
                            <Card.Title className="fw-bold fs-3">공지사항</Card.Title>
                            <div>
                                <div className="fw-bold"><Link to='post?pid='>
                                    첫 번째 공지사항 제목
                                </Link></div>
                                {/* 두 번째, 세 번째 공지사항은 흐릿하게 */}
                                <div className="mt-3" style={{opacity: 0.7}}>
                                    <div className="fw-bold"><Link to='post?pid='>
                                        두 번째 공지사항 제목
                                    </Link></div>
                                </div>
                                <div className="mt-3" style={{opacity: 0.7}}>
                                    <div className="fw-bold"><Link to='post?pid='>
                                        세 번째 공지사항 제목
                                    </Link></div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mt-3">
                    <Card className="border">
                        <Card.Body>
                            <Card.Title className="fw-bold fs-3">최신소식</Card.Title>
                            <div>
                                <div className="fw-bold"><Link to='post?pid='>
                                    첫 번째 최신소식 제목
                                </Link></div>
                                {/* 두 번째, 세 번째 최신소식은 흐릿하게 */}
                                <div className="mt-3" style={{opacity: 0.7}}>
                                    <div className="fw-bold"><Link to='post?pid='>
                                        두 번째 최신소식 제목
                                    </Link></div>
                                </div>
                                <div className="mt-3" style={{opacity: 0.7}}>
                                    <div className="fw-bold"><Link to='post?pid='>
                                        세 번째 최신소식 제목
                                    </Link></div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Col>
        </>
    )
}
const CardSection = () => {
    let postLinking:any = 'post?pid=' // + 포스트 아이디 값.
    return (
        <>
            {/* Card Section */}
            <Col>
                <Card className='mb-3 border-0 py-3'>
                    <Row>
                        {[{title: '인기글'}, {title: '최근글' }, { title: 'Best Top 3' }].map((item, index) => (
                            <Col key={index} className='border d-flex align-items-center'>
                                <div className="w-100">
                                    <Row className='flex-column'>
                                        <Col className='border-bottom p-2 fw-medium fs-3'>{item.title}</Col>
                                        <Col className='border-bottom p-2'><Link to={postLinking}>제목</Link></Col>
                                        <Col className='border-bottom p-2'><Link to={postLinking}>제목</Link></Col>
                                        <Col className='p-2'><Link to={postLinking}>제목</Link></Col>
                                    </Row>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Card>
            </Col>
        </>
    )
}
const Sections = () => {
    return (
        <>
            <Container>
                <Row className='flex-column'>
                    {WelcomeSection()}
                    {EventSection()}
                    {CardSection()}
                </Row>
            </Container>
        </>
    )
}

export default Sections;