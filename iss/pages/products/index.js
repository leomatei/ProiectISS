import {gql, GraphQLClient} from 'graphql-request'
import Footer from '../../public/components/footer'
import Header from '../../public/components/header'

export const getStaticProps = async () =>{
    const url = process.env.NEXT_PUBLIC_GRAPH_CMS_ENDPOINT
    const graphQLClient=new GraphQLClient (url, {
    headers:{
        "Authorizations": process.env.NEXT_PUBLIC_GRAPH_CMS_TOKEN,
    }
    })
    const query=gql`
    query{
    products{
        id,
        productName,
        productPrice,
        productStock,
        productDescription,
        slug,
        productPhoto{
        fileName,
        url
        }
    }
    }`

    const data=await graphQLClient.request(query)
    const products=data.products
    return {
    props:{
        products,
        }
    }
}

const ProductsPage = ({products}) =>{
    const list=()=>(<ul className='products-list'>
        {products.map((product,index)=><li>{JSON.stringify(product)}</li>)}
    </ul>)

    return(
        <>
            <Header/>
            <div className='container'>
                <h1 className='container__title'>Produse</h1>
                {list()}
            </div>
            <Footer/>
        </>
    )
}
export default ProductsPage;