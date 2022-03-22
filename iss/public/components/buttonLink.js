import PropTypes from 'prop-types'

const ButtonLink = ({buttonClass,clickAction,text,children}) => {
    return(
        <a 
            className={buttonClass}
            href={clickAction}
        >
            {text||children}
        </a>
    )
}

ButtonLink.propTypes = {
    buttonClass: PropTypes.string,
    clickAction: PropTypes.string,
    text: PropTypes.string,
    children: PropTypes.element,
}
export default ButtonLink;