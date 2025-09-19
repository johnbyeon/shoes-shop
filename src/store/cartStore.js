import { create } from "zustand";
const cartStore = create((set)=>({
    cartData :[
        {
            id:0,
            name:'White And Black', 
            count :2
        },
        {
            id:1,
            name:'Gray Nike', 
            count :1
        }
        
    ],
    

}))

export default cartStore