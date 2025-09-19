import { create } from "zustand";

const userStore = create((set)=>(
    {
        userName:'안유진',
        productName:['나이키','프로스펙스','아디다스'],
        productStock: [10,11,12],

        changeName: ()=> set((state)=>({userName: '장원영'})),
        changeProductName: ()=> set((state)=>(
            {
                productName: [...state.productName,'고무신'],
                productStock: [...state.productStock,3],
            }
        )),
    }
));

export default userStore;