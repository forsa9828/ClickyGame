import React from 'react';

function ClickItem (prop) {
    return (
        <div
            role = "img"
            label = "click item"
            // onclick will go here
            // style will go here
            className = {`click-item${props.shake ?"shake":""}`}
        
        
        />
    )
}

export default ClickItem;