import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './AppNavBar.css'
// Route : 컴포넌트 이동처리
// Routes : url에 담겨있는 정보를 획등
// Link : Link 위치의 컴포넌트를 보여주는 역할
import { Route,Routes,Link } from 'react-router-dom';
function AppNavBar() {
    return(
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">MuJinJang</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to="/">Home</Link>   
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/detail">Detail</Link> 
                        </Nav.Link>
                        <Nav.Link>
                             <Link to="/cart">Cart</Link> 
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            {/* Routing 정보를 한꺼번에 모아놓는 장소 */}
            {/* 스프링에서 사용하는 컨트롤러 */}
            <Routes>
                <Route path="/" element={<div>메인페이지</div>}/>
                <Route path="/detail" element={<div>상세페이지</div>}/>
                <Route path="/cart" element={<div>장바구니페이지</div>}/>
            </Routes>
        </>
    )
}

export default AppNavBar;