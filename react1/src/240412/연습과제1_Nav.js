import Button from "./Button"
import './연습과제1_Nav.css'

function Nav(){
    const navigate = (url) => {
        window.location.href = url
    }
    return (
        <div className="nav-container">
            {/* 구현하기 */}
            <Button size='small' handleClick={() => navigate('https://google.com')}>구글</Button>
            <Button size='small' handleClick={() => navigate('https://naver.com')}>네이버</Button>
            <Button size='small' handleClick={() => navigate('https://sssssqew.github.io/dictionary/')}>사전 검색 서비스</Button>
        </div>
    )
}

export default Nav