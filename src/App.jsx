import { useState } from 'react'
import './App.css'
import AppNavBar from './AppNavBar'
//assets 폴더 내의 이미지 사용법 ->import해서 사용해야함
import bg_png from './assets/images/bg.png';

import img_2 from './assets/images/shoes2.jpg';

import { Container, Col, Row } from 'react-bootstrap';

import data from './data/data.js'

import Product from './Product'
function App() {
  //상품 정보를 받는 프로덕트 스테이트를 만든다 
  const [product, setProduct] = useState(data);
  console.log(product);
  return (
    <>
      {/* 네비게이션바 */}
      <AppNavBar />

      {/* 메인 대문 사진 영역 */}
      <div className='main-bg'
        style={{
          backgroundImage: `url('${bg_png}')`
        }}
      />

      {/* */}
      <Container>
        <Row>
          {product.map((shoes, _) =>{
            return (
            <Col className="text-center" key={shoes.id}>
              <Product shoes={shoes} />
            </Col>
          )}
          )}
        </Row>
      </Container>

    </>
  )
}

export default App
