import PropTypes from "prop-types";

const Input = ({inputClass,label,clickAction}) => {
    return(
        <div className={inputClass}>
            {label}
            <input type="email"/>
            <button 
                className={`${inputClass}__button`}
                onClick={clickAction}>
                confirma
            </button>
        </div>
    )
}

Input.propTypes = {
    inputClass: PropTypes.string,
    label: PropTypes.string,
    clickAction: PropTypes.func,
}
export default Input;