function Detail(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="/images/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                    <h4>상품명</h4>
                    <p>상품설명</p>
                    <p>150000</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail