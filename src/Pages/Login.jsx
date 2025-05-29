import React, { useState }  from "react";
import LoginCard from "../Components/LoginCard";
import RegisterCard from "../Components/RegisterCard";


    export default function Login() {

    const [isLogin, setIsLogin] = useState(true);

    return(
        <>
            <section className="flex w-screen h-screen items-center justify-center flex-col">
                {isLogin ? <LoginCard/>: <RegisterCard/>}                
                
                <div className={`w-4/12 h-auto ${isLogin?"bg-[#3A3A3A] text-white":"bg-white/80"} flex p-5 items-center justify-center`}>
                    <button onClick={()=>{setIsLogin(!isLogin)}}
                            className="hover:cursor-pointer hover:text-green-700"    
                    >
                        {isLogin?<h4>¿No tienes cuenta?. Da click aqui</h4>:<h4>¿Tienes cuenta?. Da click aqui</h4>}
                    </button>
                </div>
            </section>
        </>
    )
 }