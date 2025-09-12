
import WhatWeCard from "../whatWeCard/whatWeCard";
import style from "./whatWe.module.css";
import { whatWeCardData } from "../../constant/data";


 const WhatWe =()=>{
    return (
        <div className={style.WhatWeContainer}>
            {
                whatWeCardData.map((data, index)=>{
                    return <WhatWeCard  key={index} name={data.name} number={data.number}/>
                })
            }
        </div>
    )
}

export default WhatWe