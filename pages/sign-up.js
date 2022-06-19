import Header from "../public/components/header"
import Footer from "../public/components/footer"
import React from "react"
import { useForm } from "react-hook-form";
import signup from "./api/signup"


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        await signup({...data, seller: false},'')
        window.location.replace("/");
    }
    return(
        <>
            <Header/>
            <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
                <label>nume</label>
                <input placeholder="nume" type="text" {...register("nume", { required: true, pattern: /^[A-Za-z]+$/i  })}></input>
                {errors.nume && <span>numele nu este valid</span>}
                <label>email</label>
                <input placeholder="email" type="text" {...register("email", { required: true, pattern: /^[a-zA-Z0-9_.+]+@[a-zA-Z0-9]+[.]+[a-z]+$/i })}></input>
                {errors.email && <span>emailul nu este valid</span>}
                <label>parola</label>
                <input placeholder="parola" type="password" {...register("parola", { required: true, pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!])/i })}></input>
                {errors.parola && <span>parola nu este valida</span>}
                <label>rolul </label>
                <input type="submit"></input>
            </form>
            <Footer/>
        </>
    )
}

export default SignUp;