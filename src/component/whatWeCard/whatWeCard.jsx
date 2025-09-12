import style  from "./whatWeCard.module.css";


 const  WhatWeCard =({name , number})=>{
    return(
        <div  className={style.whatWeCardConatiner}>
           <p className={style.WhatWeCardName}>{name}</p>
           <p className={style.WhatWeCardNumber}>{number}</p>
        </div>
    )
 }

 export default WhatWeCard;