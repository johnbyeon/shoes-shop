import { Container, Col, Row, Button,Spinner } from 'react-bootstrap';
import Product from '../Product';
import axios from 'axios';
import { useEffect, useState } from 'react';
//assets 폴더 내의 이미지 사용법 ->import해서 사용해야함
import bg_png from '../assets/images/bg.png';
function Home(props){
  const [count,setCount]= useState(1);
  const [loding,setLoding] = useState(false);
    return(
        <>
      {/* 메인 대문 사진 영역 */}
      <div className='main-bg'
        style={{
          backgroundImage: `url('${bg_png}')`
        }}
      />
        {/* */}
      <Container>
        <Row xs={3}>
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
      <div className='d-flex justify-content-center align-item-center'>
          {loding &&    <Spinner animation="border" role="status" style={{ cursor: "pointer" }}>
                <span className="visually-hidden">Loading...</span>
              </Spinner>}
          <Button variant="primary"  size="lg"
                    onClick={async()=>{
                      try{
                        if(count < 3){
                          setLoding(true);
                          const result1 = await axios(`https://zzzmini.github.io/js/react_data_0${count}.json`);
                          setCount(count+1);
                          
                          let temp = [...props.product,...result1.data];
                          props.setProduct(temp);
                        }else{
                          alert('데이터가 없습니다.')
                        }
                      }catch(error){
                        console.log('가져오기 실패 ',error)

                      }finally{
                        setLoding(false);
                      }
                      // axios
                      // .get('https://zzzmini.github.io/js/react_data_01.json')
                      // .then((result)=>{
                      //     props.setProduct([...props.product, ...result.data]);
                      //     console.log(props.product)
                      // })
                      //   .catch(()=>{
                      //     console.log('가져오기 실패');
                      //   })
                    }}>데이터 가져오기</Button>
      </div>
        </>
    );
}

export default Home;