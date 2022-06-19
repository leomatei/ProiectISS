import {gql, GraphQLClient} from 'graphql-request'
import Footer from '../../public/components/footer'
import Header from '../../public/components/header'
import ProductList from '../../public/components/productsList'

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
    if(data){
        const products=data.products
        return {
        props:{
            products,
            }
        }
    }
    else{
        return false
    }
}

const ProductsPage = ({products}) =>{
    

    return(
        <>
            <Header/>
            <div className='container'>
                <h1 className='container__title'>Produse</h1>
                {products && <ProductList products={products}/>}
            </div>
            <Footer/>
        </>
    )
}
export default ProductsPage;