import {gql, GraphQLClient} from 'graphql-request'
import Header from '../../public/components/header'
import Footer from '../../public/components/footer'
import ProductsPage from '../products'
import notFound from '../404'

export const getServerSideProps = async(pageContext) =>{
    const url = process.env.NEXT_PUBLIC_GRAPH_CMS_ENDPOINT

    const graphQLClient=new GraphQLClient (url, {
        headers:{
          "Authorizations": process.env.NEXT_PUBLIC_GRAPH_CMS_TOKEN,
        }
      })

    const pageSlug = pageContext.query.slug

    const query = gql`
      query($pageSlug:String!){
          product(where:{slug: $pageSlug }){
            id,
            productName,
            productDescription,
            productPrice,
            productStock,
            productPhoto{
                fileName,
                url
              }
          }
      }
    `
    const variables={
        pageSlug,
    }

    const data = await graphQLClient.request(query, variables)
    const product = data.product

    return {
        props:{
            product
        }
    }
}

const Product=({product})=>{
    if(product===null){
        return notFound()
    }
    console.log('adsa')
    return(
        <>
            <Header/>
            <div className='preview-product'>
                <img width="150" height="150" src={product.productPhoto.url}></img>
                <h1 className='preview-product__title'>{product.productName}</h1>
                <p className='preview-product__price'>Pret: {product.productPrice} lei/buc.</p>
                <p className='preview-product__description'>{product.productDescription}</p>
                <button>adauga in cos</button>
            </div>
            <Footer/>
        </>
    )
}

export default Product;