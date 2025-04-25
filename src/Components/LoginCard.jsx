import React from "react";
import Input from "../Components/Input";
import { useState } from "react";

export default function LoginCard(){

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    return(
        <>
            <div className="w-1/3 h-8/12 bg-[#3A3A3A] shadow-2xl shadow-black flex flex-col">
                <div className="flex h-1/3 items-end justify-center">
                    <h1 className="text-5xl text-white">Iniciar sesion</h1>
                </div>

                <div className="flex flex-col h-2/3  justify-around gap-4 items-center "> 
                    <Input 
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })} 
                        placeholder="Ingrese su usuario" 
                        style={"bg-[#1F1F1F] w-2/3 h-1/6 pt-2 p-1"}/>

                    <Input 
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
                        placeholder="Ingrese su contraseña"
                        style={"bg-[#1F1F1F] w-2/3 h-1/6 pt-2 p-1"} />
                   
                    <div>
                        <input 
                            type="checkbox" 
                            name="Mostrar" 
                            id="0" 
                            value={showPassword} 
                            onChange={()=>{setShowPassword(!showPassword);}} />
                        <label htmlFor="0" className="text-white pl-1">Mostrar contraseña</label>
                    </div>

                    <div className="w-2/3 h-2/6  p-1">
                        <button className="bg-[#2D2D2D] w-full h-full p-1 text-white hover:bg-green-700" onClick={()=>{console.log("Hola")}}>Iniciar sesion</button>
                    </div>
                </div>
            
            </div>
        </>
    )
}