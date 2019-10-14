import React from "react";
import PropTypes from "prop-types";
import "./style/dropdown.css";

const sortDropdown = ({direction, onChange}) => (
    <div>
        <select value={direction} onChange={onChange} className="mdl-selectfield">
            <option value={-1}>Price descending</option>
            <option value={1}>Price ascending</option>
        </select>
    </div>
);

sortDropdown.propTypes = {
    direction: PropTypes.oneOf([1, -1]).isRequired,
    onChange: PropTypes.func.isRequired,
};

export default sortDropdown;