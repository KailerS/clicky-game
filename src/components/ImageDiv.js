import React from "react";

function ImageDiv (props) {
    
    return (
        <>
            <div 
            role="image" 
            aria-label="click item" 
            className="click-item"
            id={props.id}
            onClick={() => props.handleClick(props.id)}
            style={{backgroundImage: `url(${props.image})`}}          
            >

            </div>
            
        </>
    )
}


    


export default ImageDiv;
