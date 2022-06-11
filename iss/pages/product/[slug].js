import {gql, GraphQLClient} from 'graphql-request'
import Header from '../../public/components/header'
import Footer from '../../public/components/footer'
import Image from 'next/image'
import notFound from '../404'
import addToCart from '../api/addToCart'

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

    

    const add = () =>{
        addToCart({quantity:1,id:product.id}).then(()=>{
            console.log('gata')
        })
    }

    return(
        <>
            <Header/>
            <div className='preview-product'>
                <Image width="150" height="150" alt="product-photo" src={product.productPhoto.url}/>
                <h1 className='preview-product__title'>{product.productName}</h1>
                <p className='preview-product__price'>Pret: {product.productPrice} lei/buc.</p>
                <p className='preview-product__description'>{product.productDescription}</p>
                <button onClick={add}>adauga in cos</button>
            </div>
            <Footer/>
        </>
    )
}

export default Product;