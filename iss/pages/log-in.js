import Header from "../public/components/header"
import Footer from "../public/components/footer"
import React from "react"
import { useForm } from "react-hook-form";
import login from "./api/login";

const signUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        login(data).then(value=>{
            // console.log(value.userAccount)
            console.log(value)
            window.localStorage.setItem('userInfo',JSON.stringify({
                id:value.id,
                name:value.name,
                email:value.email
            }))
            window.location.replace('/account/')
        })
    }
    // const firstRef=React.createRef()
    // const handleSubmit=()=>{
    //     console.log(firstRef.current.value)
    //     console.log('123')
    // }
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
            <Footer/>
        </>
    )
}

export default signUp;