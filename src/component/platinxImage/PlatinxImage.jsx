import { imageUrl } from "../../constant/imageUrl";
import style from "./platinxImage.module.css";
import { logoTextData } from "../../constant/data";



export const LogoText=({img, head,text})=>{
    return(
        <div  className={style.logoTextContainer}>
            <div className={style.LogoTextLogo}>
                <img src={img} alt="logo not  found"/>
            </div>
            <div className={style.paraContainer}>
                <p className={style.logoHead}>{head}</p>
                <p className={style.logoPara}>{text}</p>
            </div>

        </div>
    )
}

 const PlatinxImage=()=>{
    return(
        <div className={style.platinxImageContainer}>
           <div className={style.mobileContainer}>
            <img src={imageUrl.platinxMobile}/>
           </div>
            <div className={style.leftContainer} >
            <h2 className={style.mobileHead}>Effortless and Protected <br/>
            Crypto Investing</h2>
          <div className={style.logoTextBox}>
                {
                logoTextData.map((data , index)=>{
                    return <LogoText key={index} img={data.img} head={data.head} text={data.para}/>
                })
            }
          </div>
          <p className={style.logoFooter}> Begin Your Journey. Our Support Team Awaits.</p>
          <div className={style.btnBox}>
               <button className={style.greenBtn}>
            Create Account
          </button>
          </div>



           </div>
        </div>
    )
 }

  export default PlatinxImage;





