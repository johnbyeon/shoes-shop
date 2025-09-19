import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import Discount from "../Discount";
import { Nav , Spinner} from 'react-bootstrap';
import TabContent from '../TabContent'
import axios from 'axios';

///https://zzzmini.github.io/js/shoesReview.json
function Detail(props) {
    let [detailFade, setDetailFade] = useState('');


    const [loding, setLoding] = useState(false);
    let [reviewResult,setReviewResult] = useState('');
    const [state, setState] = useState(true);
    const [inputData, setInputData] = useState('');
    const [showAlret, setShowAlret] = useState(true);
    //탭을 눌럿을때 선택되는 페이지값을 갖는 스테이트
    const [tabSate, setTabState] = useState(0);

    useEffect(() => {
        const myTimer = setTimeout(() => {
            setDetailFade('ani_end')
        }, 100);
        //기존에 사용한 타이머 삭제
        return (() => {
            clearTimeout(myTimer);
            setDetailFade('');
        })
    }, [])

    //useEffect실행하기
    useEffect(() => {
        const myTimer = setTimeout(() => setShowAlret(false), 2000);
        //기존에 사용한 타이머 삭제
        return () => {
            clearTimeout(myTimer);
        }
    }, []);
    // useEffect(() => {
    //     if (isNaN(inputData.trim())) {
    //         setState(false);
    //     } else {
    //         setState(true);
    //     }
    // }, [inputData]);


    let { id } = useParams();
    const navigate = useNavigate(); //파라미터를 변수로 저장할때에 중괄호 필수
    console.log(id);

    const findProduct = props.product ? props.product.find(item => {
        return item.id === Number(id - 1)
    }) : null;

    if (findProduct == null) {
        alert("데이터를 찾을수 없습니다");
        navigate(-1);
        return null;
    }


    console.log(findProduct);
    return (
        <div className={`container ani_start ${detailFade}`}>
            <div className="container mt-2">
                {showAlret && <Discount />}
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img src={`/images/shoes${findProduct.id + 1}.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{findProduct.title}</h4>
                    <p>{findProduct.content}</p>
                    <p>{findProduct.price.toLocaleString("ko-KR", { style: "currency", currency: "KRW" })}원</p>
                    {/* {!state && <div>오류</div>}               
                    <p>수량 : 
                        <input type="text" onChange={(e)=>{setInputData(e.target.value)}} />
                    </p> */}
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
            <Nav variant="tabs" activeKey={`link-${tabSate}`} >
                <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={() => { setTabState(0) }}>제품별 특징</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={() => { setTabState(1) }}>사이즈</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={() => { setTabState(2) }}>배송</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3" onClick={ async () => {
                        setTabState(3);
                        try {
                                setLoding(true);
                                const result = await axios("https://zzzmini.github.io/js/shoesReview.json");
                                let temp =[];
                                result.data.map((review,_)=>{
                                    if(review.productId == findProduct.id){
                                        temp=[...temp,review];
                                    }
                                })
                                setReviewResult(temp);
                            } catch (error) {
                                console.log('가져오기 실패 ', error)
                            } finally {
                                setLoding(false);
                            }
                       
                    }}>리뷰</Nav.Link>
                </Nav.Item>
            </Nav>
            {loding && <Spinner animation="border" role="status" style={{ cursor: "pointer" }}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>}
            <TabContent tabSate={tabSate} product={findProduct} reviewResult={reviewResult}/>

        </div>
    );
}

export default Detail;