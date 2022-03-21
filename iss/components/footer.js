import Input from "./input";

const Footer = () => {
    return(
        <div className="footer">
            <div>
                (c) Matei Leonard
            </div>
            <div className="footer__content">
                <div className="footer__contact-info">
                    Contact:
                    <span>
                        tel: 123
                    </span>
                    <span>
                        email: 123@gmail.com
                    </span>
                    <span>
                        adresa: strada 1
                    </span>
                </div>
                <div className="footer__newsletter">
                    <Input inputClass="footer__input" label="Aboneaza-te la newsletterul nostru"/>
                </div>
            </div>
        </div>
    )
}
export default Footer;
