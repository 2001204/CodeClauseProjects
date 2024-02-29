import React from 'react';


const ColorPicker = ({ color, onChange }) => {
    return (
    <div> 
      
        <nav class="navbar bg-body-tertiary"> 
  <div class="container-flex align-center .col-6 .col-md-4">
   #   Choose Color : 

  <input class="form-select" type="color" value={color} onChange={onChange} />
  
  </div>
</nav>

</div>
                       
            );
}

export default ColorPicker;
