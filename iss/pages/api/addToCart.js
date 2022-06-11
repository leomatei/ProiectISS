import {gql, GraphQLClient} from 'graphql-request'

export default async function(req, res){
    const url = process.env.NEXT_PUBLIC_GRAPH_CMS_ENDPOINT
    const graphQLClient=new GraphQLClient (url, {
        headers:{
          "Authorizations": process.env.NEXT_PUBLIC_GRAPH_CMS_TOKEN,
        }
    })
    const variables = {
        quantity: req.quantity,
        id: req.id
    }
    const mutationAddProductSystem = gql`
        mutation($quantity:Int!,$id:ID!){
            createProductsSystem(data: {quantity: $quantity, product: {connect: {id: $id}}}){
                id
            }
        }
    `
    const mutationAddToCart = gql`
    mutation($id:ID!){
        createShoppinCart(
            data: {price: 1.5, productsInCart: {connect: {ProductsSystem: {id: $id}}}}
          ){
              id
          }
    }
` 
    // console.log(req)
    const variables2 = {id:await graphQLClient.request(mutationAddProductSystem,variables).then(value=>value.createProductsSystem.id)}

    res = await graphQLClient.request(mutationAddToCart,variables2)

}