import { useState } from 'react';
import './App.css';
import AppNavBar from './AppNavBar';
//assets 폴더 내의 이미지 사용법 ->import해서 사용해야함
import bg_png from './assets/images/bg.png';
import data from './data/data.js';
// Route : 컴포넌트 이동처리
// Routes : url에 담겨있는 정보를 획등
// Link : Link 위치의 컴포넌트를 보여주는 역할
import { Route,Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Detail from './Detail';

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
      {/* 스프링에서 사용하는 컨트롤러 */}
      <Routes>
        <Route path="/" element={<div><Home product={product}/></div>} />
        <Route path="/detail/:id" element={<Detail product={product} setProduct={setProduct}/>} />
        <Route path="/cart" element={<div>장바구니페이지</div>} />
        <Route path='/about' element={<About />}> 
                <Route path='member'element={<div>Member</div>}></Route>
                <Route path='location' element={<div>location</div>}></Route>
        </Route>
        <Route path='*' element={<div>Page Not Found 404 Error</div>}></Route>
      </Routes>


    </>
  )
}

export default App
