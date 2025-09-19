import { Rating } from 'react-simple-star-rating'
import {Stack} from 'react-bootstrap'

export default function Reviews({reviewResult}) {
     let resultPonint = 0;
     let reviewIndex = 0;   
     let avgresult = 0;
    console.log(reviewResult);

    Array.isArray(reviewResult) && reviewResult.map((review,index)=>{
        resultPonint += review.point;
        reviewIndex++;
    });

      avgresult = Math.round(resultPonint/reviewIndex);

  return (
    <>
    <div  style={{marginTop:'20px',}}>
        <h4>리뷰({reviewIndex}) <span><Rating readonly initialValue={avgresult} size={24}/></span></h4></div>
    <Stack gap={3}>
        {Array.isArray(reviewResult) && reviewResult.map((review,index)=>{
            return(
            <div className="p-2" key={index}>
                <div>작성자 : {review.reviewId}</div>
                <div><Rating readonly initialValue={review.point}  size={20}/></div>
                <div><h5>{review.title}</h5></div>
                <div><p>{review.review}</p></div>
            </div> 
            )
        })}
    </Stack>
    </>
  );
}