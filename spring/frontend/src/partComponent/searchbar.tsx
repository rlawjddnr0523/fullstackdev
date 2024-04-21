import {Button, Dropdown, DropdownDivider, Form, Stack} from "react-bootstrap";
import React, {useState} from "react";

function Searchbar() {
    const [filter, setFilter] = useState<string>('Filter'); // 필터 변수와 setter 함수를 선언하여 상태를 관리
    const handleItemClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
        // 클릭 이벤트 처리 로직
        const selectedOption = event.currentTarget.textContent; // 클릭된 Dropdown.Item의 텍스트 콘텐츠를 가져옴
        setFilter(selectedOption || 'Filter'); // 선택된 옵션으로 필터를 업데이트
    };
    const handleResetClick = () => {
        setFilter('Filter'); // 필터를 기본값으로 재설정
    };
    return (
        <div className="searchbar bg-dark mb-4">
            <Stack direction='horizontal' gap={3}>
                <Form.Control className="" placeholder='Search'/>
                <Button variant='secondary'>검색</Button>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {filter}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.ItemText>
                            <div className='badge text-bg-warning text-wrap'>필터 미 선택 시 전체를 검색합니다.</div>
                        </Dropdown.ItemText>
                        <DropdownDivider />
                        <Dropdown.Item onClick={handleItemClick}>게시물 검색</Dropdown.Item>
                        <Dropdown.Item onClick={handleItemClick}>유저 검색</Dropdown.Item>
                        <DropdownDivider />
                        <Dropdown.Item onClick={handleResetClick}>Reset</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Stack>
        </div>
    )
}
export default Searchbar;