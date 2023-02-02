import React from "react";
import { slide as Menu } from "react-burger-menu";
import Top from './img/Top.png';

function topMenu(props)  {
    return (
        <header>
            <Menu {...props}>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="About me" className="menu-item" href="/">About me</a>
                <a id="Portfolio" className="menu-item" href="/">Portfolio</a>
                <a id="SkillLevel" className="menu-item" href="/">SkillLevel</a>
                <a id="Profile" className="menu-item" href="/">Profile</a>
            </Menu>
            <div className="Top">
                <img alt="Top_img" className="Top_img" src={Top} />
            </div>
        </header>
    )
}

export default topMenu;