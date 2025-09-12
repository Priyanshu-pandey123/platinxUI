import style from "./navBar.module.css"
import { imageUrl } from "../../constant/imageUrl";


 console.log(imageUrl.logo ,' from  the nav')

 const NavBar =()=>{

    return(

        <div className={style.navBar}>
           <div>
            <img src={imageUrl.logo} alt="logo not  found" />
           </div>
           <div>
            <ul className={style.navItems}>
                <li>Home </li>
                      <li>Exchange</li>
                            <li>Wallet</li>
            </ul>

           </div>
           <div className={style.navBtn}>
            <button  className={style.button}>
                Create Account
            </button>
            <button className={style.loginBtn}>
                Login
            </button>

           </div>
        </div>
    )
 }

export default NavBar;