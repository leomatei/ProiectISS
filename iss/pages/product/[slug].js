import {gql, GraphQLClient} from 'graphql-request'

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
    console.log(product)
    return(
        <>
        
        </>
    )
}

export default Product;