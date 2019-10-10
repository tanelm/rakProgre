import React from "react";
import PropTypes from "prop-types";
import "./style/dropdown.css";

const sortDropdown = ({direction, onChange}) => (
    <div>
        <select id="mainselection" value={direction} onChange={onChange}>
            <option value={-1}>Price high to low</option>
            <option value={1}>Price low to high</option>
        </select>
    </div>
);

sortDropdown.propTypes = {
    direction: PropTypes.oneOf([1, -1]).isRequired,
    onChange: PropTypes.func.isRequired,
};

export default sortDropdown;