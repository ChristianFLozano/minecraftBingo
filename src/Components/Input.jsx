import React from "react";

export default function Input({ type, placeholder, onChange }) {
    return(
        <>
            <input 
                className="text-white w-full h-full p-1 bg-[#2D2D2D] " 
                type={type}
                placeholder={placeholder}/>
        </>
    )
}