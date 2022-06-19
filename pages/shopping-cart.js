import Header from "../public/components/header"
import Footer from "../public/components/footer"
import Link from "next/link";
import { React, useState, useEffect } from "react";

const ShoppingCart=()=>{
    
    const [data, setData]=useState()
    useEffect(()=>{
        setData(JSON.parse(window.localStorage.getItem('userInfo')))
        
    },[])
    const content =()=> {
        console.log(data)
        if(JSON.stringify(data)!=='{}'){
            return <div>asd</div>
        } else {
            return (
                <>
                    <div>
                        intrati in cont pentru a accesa cosul de cumparaturi
                    </div>
                    <Link href='log-in'>log in</Link>
                </>
                )
        }
    }

    return(
        <>
            <Header/>
            <h1>Cosul tau de cumparaturi</h1>
            {content()}
            <Footer/>
        </>
    )
}

export default ShoppingCart;