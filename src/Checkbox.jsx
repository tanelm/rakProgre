import React from "react";
import PropTypes from "prop-types";
import "./checkbox-slider.css";

const Checkbox = ({name, checked, onChange}) => (
    <div className="container">
        <div>{name}</div>
        <label className="switch">
            <input 
            type="checkbox" 
            id={name} 
            name={name} 
            checked={checked} 
            onChange={onChange} />
            <div className="slider round"></div>
        </label>
    </div> 
);

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.string.isRequired,
    checked: PropTypes.string.isRequired,
};

export default Checkbox;