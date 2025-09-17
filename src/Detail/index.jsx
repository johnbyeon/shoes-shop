import { useNavigate, useParams } from "react-router-dom"

function Detail(props){
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
            <div className="row">
                <div className="col-md-6">
                    <img src={`/images/shoes${findProduct.id+1}.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4>{findProduct.title}</h4>
                    <p>{findProduct.content}</p>
                    <p>{findProduct.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail