import Header from "../public/components/header"
import Footer from "../public/components/footer"
import { useForm } from "react-hook-form";
import login from "./api/login";
import { useState } from "react";
import { server } from "../config";

const SignUp = () => {
    const { register, handleSubmit} = useForm();
    const [serverError, setServerError] = useState(false);
    const onSubmit = async data => {
        login(data).then(value=>{
            if(!value){
                setServerError('Acest cont nu exista!')
            }
            else{
                window.localStorage.setItem('userInfo',JSON.stringify({
                    id:value.id,
                    name:value.name,
                    email:value.email
                }))
                window.location.replace(`${server}/account/`)
            }
        })
    }
    return(
        <>
            <Header/>
            <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
                <label>email</label>
                <input placeholder="email" type="text" {...register("email")}></input>
                <label>parola</label>
                <input placeholder="parola" type="password" {...register("parola")}></input>
                <input type="submit"></input>
            </form>
            {serverError && <span>{serverError}</span>}
            <Footer/>
        </>
    )
}

export default SignUp;