import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import Discount from "../Discount";

function Detail(props){
    const [state,setState] = useState(true);
    const [inputData, setInputData]= useState('');
    const [showAlret, setShowAlret] = useState(true);
    //useEffect실행하기
    useEffect(()=>{
       const myTimer = setTimeout(()=>setShowAlret(false), 2000);
       //기존에 사용한 타이머 삭제
       return()=>{
        clearTimeout(myTimer);
       }
    },[]);
    useEffect(()=>{
        if(isNaN(inputData.trim())){
            setState(false);
        }else{
            setState(true);
        }
    },[inputData]);

    
    let {id} = useParams();
    const navigate = useNavigate(); //파라미터를 변수로 저장할때에 중괄호 필수
    console.log(id);

    const findProduct = props.product ? props.product.find(item=>{
        return item.id===Number(id-1) 
    }): null;

    if(findProduct == null){
        alert("데이터를 찾을수 없습니다");
        navigate(-1);
        return null;
    }


    console.log(findProduct);
    return(
        <div className="container">
            <div className="container mt-2">
                {showAlret && <Discount />}
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img src={`/images/shoes${findProduct.id+1}.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{findProduct.title}</h4>
                    <p>{findProduct.content}</p>
                    {!state && <div>오류</div>}
                    <p>{findProduct.price}</p>
                    <p>수량 : 
                        <input type="text" onChange={(e)=>{setInputData(e.target.value)}} />
                    </p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    );
}

export default Detail;