import React from 'react';
import Input from '../Components/Input';
import { useState } from 'react';
export default function RegisterCard() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
            username: '',
            password: '',
            confirmPassword: '',
        });

    return(
        <>
            <div className="lg:w-1/3 lg:h-8/12 w-5/6 h-1/2 bg-white/80 shadow-lg shadow-black flex flex-col">
                <div className="flex h-1/3  items-end justify-center">
                    <h1 className="text-5xl text-black">Registro</h1>
                </div>

                <div className="flex flex-col lg:h-2/3  justify-center gap-1.5 items-center ">
                    <Input 
                        type="text"
                        id="usernameRegister"
                        name="username"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })} 
                        placeholder="Ingrese su nuevo usuario" 
                        style={"bg-[#1F1F1F] w-2/3 h-1/6 pt-2 p-1"}/>
                    <Input 
                        type={showPassword ? 'text' : 'password'}
                        id="passwordRegister"
                        name="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
                        placeholder="Ingrese una contraseña"
                        style={"bg-[#1F1F1F] w-2/3 h-1/6 pt-2 p-1"} />
                    <Input 
                        type={showPassword ? 'text' : 'password'}
                        id="passwordRegisterConfirm"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} 
                        placeholder="Vuelva a ingresarla"
                        style={"bg-[#1F1F1F] w-2/3 h-1/6 pt-2 p-1 outline-none"} />

                        
                    <div>
                        <input 
                            type="checkbox" 
                            name="Mostrar" 
                            id="0" 
                            value={showPassword} 
                            onChange={()=>{setShowPassword(!showPassword);}} 
                            className='accent-green-700 hover:cursor-pointer'
                            />
                            

                        <label htmlFor="0" className="text-black pl-1">Mostrar contraseñas</label> 
                    </div>
                    <div className="w-2/3 h-2/6  p-1">
                        <button className="bg-[#2D2D2D] w-full h-full p-1 text-white hover:bg-green-700
                                            hover:cursor-pointer" 
                        onClick={()=>{console.log("Hola")}}>Registrar</button>
                    </div> 
                </div>
                
            </div>
        </>
    )
}