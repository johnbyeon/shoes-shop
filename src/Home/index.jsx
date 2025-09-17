import { Container, Col, Row } from 'react-bootstrap';
import Product from '../Product';
function Home(props){
    
    return(
        <>
        {/* */}
      <Container>
        <Row>
          {props.product.map((shoes, _) => {
            return (
              <Col className="text-center" key={shoes.id}>
                <Product shoes={shoes} />
              </Col>
            )
          }
          )}
        </Row>
      </Container>
        </>
    );
}

export default Home;