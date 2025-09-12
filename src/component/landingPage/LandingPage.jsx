import { imageUrl } from "../../constant/imageUrl";
import style from "./landingPage.module.css";

const LandingPage = () => {
  return (
    <div className={style.landingPage}>
      {/* Text Content */}
      <div className={style.content}>
        <h1 className={style.heading}>
          Best Indian Crypto Exchange <br /> to Buy & Sell Instantly
        </h1>
        <p className={style.subHeading}>
          PlatinX is a 100% Indian exchange offering a{" "}
          <span className={style.greenText}>secure</span>
          <br/>
           crypto trading experience.
        </p>
        <div className={style.downloadBox}>
          <button className={style.createAccountButton}>Create Account</button>
          <div className={style.logoBorder}>
            <img src={imageUrl.apple} alt="apple logo not found" />
          </div>
          <div className={style.logoBorder}>
            <img src={imageUrl.playStore} about="play stire image not founf"/>
          </div>
        </div>
        <div className={style.connectedBox}>
          <div className={style.box}>
            <div>
              <img src={imageUrl.user}/>
            </div>
            <div className={style.textBox}>
              <p className={style.boldText}>FIU</p>
              <p className={style.noramlText}>Register</p>

            </div>
            
          </div>
              <div className={style.box}>
            <div>
              <img src={imageUrl.users}/>
            </div>
            <div className={style.textBox}>
              <p className={style.boldText}>1 Core +</p>
              <p className={style.noramlText}>Users</p>

            </div>
            
          </div>
             <div className={style.lastBox}>
            <div>
              <img src={imageUrl.starRating}/>
            </div>
           <div className={style.textBox}>
              <p className={style.boldText}>4.5</p>
              <p className={style.noramlText}>Rating</p>

            </div>
            
          </div>
         
        </div>
      </div>

      {/* Floating Image */}
      <img
        src={imageUrl.landingImage}
        alt="landing"
        className={style.landingImage}
      />
    </div>
  );
};

export default LandingPage;
