import Header from "../public/components/header"
import Footer from "../public/components/footer"
import Link from "next/link";


const notFound=()=>{
    
    return(
        <>
            <Header/>
            <h1>Page not found!</h1>
            <Link href='/'>Go home</Link>
            <Footer/>
        </>
    )
}

export default notFound;