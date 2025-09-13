
import { imageUrl } from "../../constant/imageUrl";

import style from "./footer.module.css"
import { qucikLink, informationLink } from "../../constant/data";

const List=({text})=>{
    return(
        <div className={style.footerList}>
          <div className={style.arrowBox}>
              <img src={imageUrl.footerArrow} alt="footer arrow  not found"/>
          </div>
            <p className={style.footerListText}>{text}</p>

        </div>
    )
}

 const Footer =()=>{
    return (
        <div className={style.footerContainer}>
          <div className={style.footerLogo}>
            <div className={style.footerLogoImage}>
                <img src={imageUrl.footerLogo} alt="footer image not  found" />
            </div>

            <p className={style.footerLogoPara}>
                First Digital asset leveraged. <br/>
                Exchange with the speed of microsecond.
            </p>
            <div className={style.footerSocilaIcon}>
                 <img src={imageUrl.instagram} alt="social icon  not found"/>
                <img src={imageUrl.facebook} alt="social icon  not found"/>
                 <img src={imageUrl.linkedin} alt="social icon  not found"/>
                <img src={imageUrl.twitter} alt="social icon  not found"/>
            </div>

            
            
          </div>
          <div className={style.quickLink}>
            <p className={style.footerHead}>Quick Links</p>
            <div className={style.quickLinkList}>
                {
                qucikLink.map((data , index)=>{
                    return <List key={index} text={data}/>
                })
                }
            </div>

          </div>
          <div className={style.information}>
          <h3 className={style.footerHead}>Information</h3>
                  <div className={style.quickLinkList}>
                {
                informationLink.map((data , index)=>{
                    return <List key={index} text={data}/>
                })
                }
            </div>


          </div>
          <div className={style.contact}>
            <h3 className={style.footerHead}>Contact</h3>
           <p className={style.contactPara }>Press Enquiries write to <span className={style.greenText}> support@platinx.exchange</span></p>
           <p className={style.contactPara }>Press Enquiries: Call<span className={style.greenNumber}>  +91 9560107106</span></p>
           <p className={style.contactAddress}>Address :</p>
           <p className={style.contactPara }>Unit Number: - 1919, 19th floor, Tower A</p>
           <p className={style.contactPara }>Spectrum Metro Mall, Sector 75, Noida-201301 , India</p>
            

          </div>
        </div>
    )
 }


  export default Footer;



