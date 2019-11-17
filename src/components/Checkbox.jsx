import React from "react";
import PropTypes from "prop-types";
import "./style/checkbox.css";


const Checkbox = ({name, onChange, checked}) => {
    return (
        <div>
            <label className="pure-material-checkbox">
            <input
                name={name}
                type="checkbox"
                checked={checked}
                onChange={onChange} />
            <span>{name}</span>
            </label>
        </div>
    );
};

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
};

export default Checkbox;