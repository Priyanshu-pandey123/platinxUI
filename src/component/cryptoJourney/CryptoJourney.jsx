

import { cryptJourneyTextData } from "../../constant/data";
import  style from "./cryptoJourney.module.css";


 const CryptoJourneyCard=({img, head, para})=>{
      return(
         <div className={style.globalSecurityCard}>
             <div>
                 <img src={img} alt="security image not found"/>
 
             </div>
             <p className={style.cardHead}>
                 {head}
             </p>
             <p className={style.cardPara}>
                 {para}
             </p>
            
         </div>
     )
 }




 const CryptoJourney =()=>{
   return (
         <div className={style.GlobalSecurity}>
              <div className={style.headBox}>
                 <p className={style.meet}> Prioritizes</p>
                 <h2 className={style.head}>Your Crypto Journey</h2>
              </div>
              <div className={style.GlobalSecurityCardBox}>
                 {
                     cryptJourneyTextData.map((data, index)=>{
                         return <CryptoJourneyCard  key={index} img={data.img} head={data.head} para={data.para}/>
                     })
                 }
              </div>
 
         </div>
     )
 }


 export  default CryptoJourney;




