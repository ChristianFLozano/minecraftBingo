import React from "react";
import LoginCard from "../Components/LoginCard";
import RegisterCard from "../Components/RegisterCard";
import diamante from "../assets/gifs/diamante.gif";

 export default function Login() {



    return(
        <>
            <section className="flex w-screen h-screen items-center justify-center lg:flex-row flex-col">
                {/*Esta es la seccion del registro */}
                <LoginCard/>

                {/*Esta es la seccion del registro */}
                <RegisterCard/>
                <img src={diamante} alt="gif de creeper" className="absolute w-32" />
            </section>
        </>
    )
 }