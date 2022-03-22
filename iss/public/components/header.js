import ButtonLink from "./buttonLink";
import Image from "next/image";

const Header=()=>{
    const logo=(<img
        src="../assets/logo.png" 
        alt="logo"
        width="50px"
        height="50px"
    />)
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
                clickAction="#"
                text="intra in cont"
            />
            <ButtonLink
                buttonClass="header__button"
                clickAction="#"
                text="creeaza cont"
            />
            <ButtonLink
                buttonClass="header__button"
                clickAction="/products"
                text="produse"
            />
        </div>
    </div>
    )
}
export default Header;