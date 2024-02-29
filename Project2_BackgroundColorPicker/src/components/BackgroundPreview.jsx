import React from 'react';

import './bkgpreview.css';
const BackgroundPreview = ({ colors, gradientType}) => {
    const gradientString = `${gradientType}-gradient(${colors.join(', ')})`;

    const style = {
        backgroundImage: gradientString,
        width: '1645px', 
        height: '1000px',
    };

    return (
        <div className="preview" style={style}>
          
       </div>
    );
}

export default BackgroundPreview;
