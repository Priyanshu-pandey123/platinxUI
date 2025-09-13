
import style from "./globalSecurity.module.css"
import { secuirtyCardTextData } from "../../constant/data"


 const GlobalSecurityCard=({img,head ,para})=>{
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

 const GlobalSecurity=()=>{
    return (
        <div className={style.GlobalSecurity}>
             <div className={style.headBox}>
                <p className={style.meet}>Meets</p>
                <h2 className={style.head}>Global Security Standards</h2>
             </div>
             <div className={style.GlobalSecurityCardBox}>
                {
                    secuirtyCardTextData.map((data, index)=>{
                        return <GlobalSecurityCard  key={index} img={data.img} head={data.head} para={data.para}/>
                    })
                }
             </div>

        </div>
    )
 }

 export default GlobalSecurity;