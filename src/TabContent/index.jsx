import { useEffect, useState } from "react";
import DetailInfo from "../TabInfo/DetailInfo";
import SizeGuide from "../TabInfo/SizeGuide"
import Shipping from "../TabInfo/Shipping"

function TebContent({tabSate, product}){
    let [fade, setFade] = useState('');
    //useEffect
    useEffect(()=>{
         const myTimer = setTimeout(() =>{
            setFade('ani_end')
        }, 100);
        //기존에 사용한 타이머 삭제
        return (() => {
            clearTimeout(myTimer);
            setFade('');
        })
    },[tabSate])

    return(
        <div className={`ani_start ${fade}`}>
            {[
        <div><DetailInfo product={product}/></div>,
        <div><SizeGuide/></div>,
        <div><Shipping/></div>,
            ][tabSate]}
        </div>
    );
}

export default TebContent;