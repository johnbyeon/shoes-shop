import { Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
function Product(props) {
    const image = `/images/shoes${props.shoes.id + 1}.jpg`;
    const navigate = useNavigate();
    return (
        <>
            {console.log(props.shoes)}
            <img src={image} onClick={()=>{navigate(`/detail/${props.shoes.id+1}`)}}
                width="80%" />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
        </>
    )
}
export default Product