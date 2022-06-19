import ButtonLink from "./buttonLink";
import SimpleButton from "./simpleButton";
import Image from "next/image";
import { useState, useEffect } from "react";
import { server } from "../../config";

const Header=()=>{
    const [userInfo, setUserInfo] = useState(false)
    useEffect(()=>{
        setUserInfo(window.localStorage.getItem('userInfo')!=='{}')
        
    },[])
    const logo=(<img
        src="../assets/logo.png" 
        alt="logo"
        width="50px"
        height="50px"
    />)
    
    const logOut = () => {
        window.localStorage.setItem('userInfo',JSON.stringify({}))
        window.location.replace(server)
    }
return (
    <div className="header">
        <ButtonLink
            className="header__logo"
            clickAction="/"
            children={logo}
        />
        <div className="header__buttons">
            <ButtonLink
                buttonClass="header__button"
                clickAction="/shopping-cart"
                text="Cosul meu"
            />
            {!userInfo && <>
                <ButtonLink
                    buttonClass="header__button"
                    clickAction="/log-in"
                    text="intra in cont"
                />
                <ButtonLink
                    buttonClass="header__button"
                    clickAction="/sign-up"
                    text="creeaza cont"
                />
            </>}
            <ButtonLink
                buttonClass="header__button"
                clickAction="/products"
                text="produse"
            />
            {userInfo && <>
                <ButtonLink
                    buttonClass="header__button"
                    clickAction="/account"
                    text="contul meu"
                />
                <SimpleButton
                    buttonClass="header__button"
                    clickAction={logOut}
                    text="iesire din cont"
                />
            </>
            }
        </div>
    </div>
    )
}
export default Header;