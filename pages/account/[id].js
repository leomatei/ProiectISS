import {gql, GraphQLClient} from 'graphql-request'
import Header from '../../public/components/header'
import Footer from '../../public/components/footer'


const Account=({id,name,email})=>{

    return(
        <>
            <Header/>
            <h1>{name}</h1>
            <h2>{email}</h2>
            <Footer/>
        </>
    )
}

export default Account;