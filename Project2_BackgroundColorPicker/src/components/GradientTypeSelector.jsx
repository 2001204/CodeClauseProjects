
import React from 'react';
import './GradientTypeselector.css';
const GradientTypeSelector = ({ gradientType, onChange }) => {
    return (

        <select class="form-select" aria-label="Default select example" value={gradientType} onChange={onChange}>
            <option value="linear">Linear Gradient</option>
            <option value="radial">Radial Gradient</option>
            <option value="conic">Conic Gradient</option>
            <option value="repeating-linear">Repeating Gradient</option>
        </select>
       
    );
}

export default GradientTypeSelector;
