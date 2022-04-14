import {gql, GraphQLClient} from 'graphql-request'

export default async function(req, res){
    console.log('req',req)
    console.log('req.nume',req.nume)
    const url = process.env.NEXT_PUBLIC_GRAPH_CMS_ENDPOINT
    const graphQLClient=new GraphQLClient (url, {
        headers:{
          "Authorizations": process.env.NEXT_PUBLIC_GRAPH_CMS_TOKEN,
        }
    })
    const variables = {
        nume: req.nume,
        email: req.email,
        parola: req.parola,
        seller: req.seller
    }
    const query = gql`
        mutation($nume:String!,$email:String!,$parola:String!,$seller:Boolean!) {
            createUserAccount(
                data: {name: $nume, email: $email, parola: $parola, seller: $seller}
            ) {
            id
            }
        }
    `
    return await graphQLClient.request(query, variables)
}