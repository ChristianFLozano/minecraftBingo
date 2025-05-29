import React from "react";

export default function Input( props ) {
    return(
        <>
        <div className={props.style}>
            <input 
                className="text-white w-full h-full p-1 bg-[#2D2D2D] outline-0 caret-green-700 "
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                type={props.type}
                placeholder={props.placeholder}/>
        </div>
            
        </>
    )
}