import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './AppNavBar.css'
// Route : 컴포넌트 이동처리
// Routes : url에 담겨있는 정보를 획등
// Link : Link 위치의 컴포넌트를 보여주는 역할
import { Link,useNavigate } from 'react-router-dom';
function AppNavBar() {
    const navigate = useNavigate();
    return(
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">MuJinJang</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
                        <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>                      
                        <NavDropdown id="navbarScrollingDropdown" title="About">
                            <NavDropdown.Item onClick={()=>{navigate('/about/member')}}>member</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>{navigate('/about/location')}}>location</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
            {/* Routing 정보를 한꺼번에 모아놓는 장소 */}
        </>
    )
}

export default AppNavBar;