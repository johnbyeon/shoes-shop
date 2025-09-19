import Table from 'react-bootstrap/Table';
import React from 'react';
import userStore from '../store/userStore';
import cartStore from '../store/cartStore';

function Cart() {
    const userName = userStore((state) => state.userName);
    console.log(userName);

    const { productName, productStock } = userStore();
    console.log(productName);
    console.log(productStock);


    const cartData = cartStore((state) => state.cartData)
    console.log(cartData);
    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {cartData.map((data, i) => (
                        <tr key={i}>
                            <th>{data.id}</th>
                            <th>{data.name}</th>
                            <th>{data.count}</th>
                            <th>수정삭제</th>
                        </tr>
                    ))}


                </tbody>
            </Table>
        </>
    )
}

export default React.memo(Cart)