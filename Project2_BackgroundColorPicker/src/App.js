

import React, { useState } from 'react';
import ColorPicker from './components/ColorPicker';
import GradientTypeSelector from './components/GradientTypeSelector';
import BackgroundPreview from './components/BackgroundPreview';


const App = () => {
    const [colors, setColors] = useState(['#ff0000', '#00ff00','#00ffff' ]);
    const [gradientType, setGradientType] = useState('linear');

    const handleColorChange = (index, color) => {
        const newColors = [...colors];
        newColors[index] = color;
        setColors(newColors);
    };

    const handleGradientTypeChange = (event) => {
        setGradientType(event.target.value);
    };

    return (
        <div className="app">
            <center><h3>Background Color Picker</h3></center>
            <ColorPicker color={colors[0]} onChange={(e) => handleColorChange(0, e.target.value)} />
            <ColorPicker color={colors[1]} onChange={(e) => handleColorChange(1, e.target.value)} />
            <ColorPicker color={colors[2]} onChange={(e) => handleColorChange(3, e.target.value)} />
            <GradientTypeSelector gradientType={gradientType} onChange={handleGradientTypeChange} />
            <BackgroundPreview colors={colors} gradientType={gradientType} />
            
        </div>
    );
}

export default App;


