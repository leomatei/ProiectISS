import {gql, GraphQLClient} from 'graphql-request'
import Header from '../../public/components/header'
import Footer from '../../public/components/footer'
import { useEffect, useState } from 'react'
import useSWR from "swr";

// const [appState, setAppState] = useAppContext();
// export const getServerSideProps = async(pageContext) =>{
//     const url = process.env.NEXT_PUBLIC_GRAPH_CMS_ENDPOINT
//     const graphQLClient=new GraphQLClient (url, {
//         headers:{
//           "Authorizations": process.env.NEXT_PUBLIC_GRAPH_CMS_TOKEN,
//         }
//       })

//     const pageSlug = pageContext.query.slug

//     const query = gql`
//       query($pageSlug:String!){
//           product(where:{slug: $pageSlug }){
//             id,
//             productName,
//             productDescription,
//             productPrice,
//             productStock,
//             productPhoto{
//                 fileName,
//                 url
//               }
//           }
//       }
//     `
//     const variables={
//         pageSlug,
//     }

//     const data = await graphQLClient.request(query, variables)
//     const product = data.product
//     return {
//         props:{
//             product
//         }
//     }
// }

const Account=()=>{
    
    // useEffect(()=>{
    //     const data = window.localStorage.getItem('userInfo')
    //     name=data.name
    //     email=data.email
    // })
    const [data, setData]=useState()
    useEffect(()=>{
        setData(JSON.parse(window.localStorage.getItem('userInfo')))
        
    },[])
    const content =()=> <div>
        <h1>{data.name}</h1>
        <h2>{data.email}</h2>
    </div>
    
    return(
        <>
            <Header/>
            {data && content()}
            <Footer/>
        </>
    )
}

export default Account;