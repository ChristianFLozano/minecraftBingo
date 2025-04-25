import React from "react";
import LoginCard from "../Components/LoginCard";
import RegisterCard from "../Components/RegisterCard";
 export default function Login() {



    return(
        <>
            <section className="flex w-screen h-screen items-center justify-center">
                {/*Esta es la seccion del registro */}
                <LoginCard/>

                {/*Esta es la seccion del registro */}
                <RegisterCard/>
            </section>
        </>
    )
 }