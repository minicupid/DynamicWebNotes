import React from "react";
import lace from './assets/lace.png'
import r_ribbon from './assets/r_ribbon.png'
import l_ribbon from './assets/l_ribbon.png'

function Card({children}) {
    return (
        <div className = "card">
            <div className = "card-inner">
                <img className = "l_ribbon" src = {l_ribbon} alt = "ribbon deco"/>
                <img className = "r_ribbon" src = {r_ribbon} alt = "ribbon deco"/>
                {children}
            </div>
        </div>
    );
}

export default Card;