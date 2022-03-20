import {gql, GraphQLClient} from 'graphql-request'
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



const Home=({products})=> {
  console.log(products)
  return (
    <div>
      Heloo
    </div>
  )
}
export default Home;
