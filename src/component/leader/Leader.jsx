
import { imageUrl } from "../../constant/imageUrl"
import style from "./leader.module.css"


  const LeaderCard=()=>{
    return (
        <div className={style.LeaderCardContainer}>
            <div className={style.iconText}>
                <div className={style.coinImage}>
                    <img src={imageUrl.bitcoin} alt="coin image not  found" />
                </div>
                <div className={style.coinNameSymbol}>
                    <p className={style.coinName}>Bit Coin</p>
                    <p className={style.coinSymbol}>BTC</p>
                </div>
            </div>
            <p className={style.coinPrice}>
               ₹ 1,01,56,750.00
            </p>

        </div>
    )
  }


 const Leader =()=>{
    return (
        <div className={style.LeaderContainer}>
            <div className={style.textContainer}>
                <h2 className={style.LeaderHead}>The Market Leaders</h2>
                <p className={style.para}>See All 5000+ Assets <img src={imageUrl.rightArrow} alt="right arrow not found"/>  </p>
            </div>
           <div className={style.leaderCardBox}>
            <LeaderCard/>
            <LeaderCard/>
            <LeaderCard/>
           </div>

        </div>
    )
 }


 export default Leader