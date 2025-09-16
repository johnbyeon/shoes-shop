import { Col } from "react-bootstrap"
function Product(props) {
    const image = `/images/shoes${props.shoes.id + 1}.jpg`;
    return (
        <>
            <img src={image}
                width="80%" />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
        </>
    )
}
export default Product