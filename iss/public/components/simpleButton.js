import PropTypes from 'prop-types'

const SimpleButton = ({buttonClass,clickAction,text,children}) => {
    return(
        <a 
            className={buttonClass}
            onClick={clickAction}
        >
            {text||children}
        </a>
    )
}

SimpleButton.propTypes = {
    buttonClass: PropTypes.string,
    clickAction: PropTypes.func,
    text: PropTypes.string,
    children: PropTypes.element,
}
export default SimpleButton;