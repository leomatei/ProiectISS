import {gql, GraphQLClient} from 'graphql-request'

export default async function SignUpAPI(req, res){
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
    const mutation = gql`
        mutation($nume:String!,$email:String!,$parola:String!,$seller:Boolean!) {
            createUserAccount(
                data: {name: $nume, email: $email, parola: $parola, seller: $seller}
            ) {
            id
            }
        }
    `

    let account_to_publish = await graphQLClient.request(mutation, variables)
    account_to_publish =account_to_publish.createUserAccount.id
    const publish=gql`
        mutation($id:ID!){
            publishUserAccount(where: {id: $id}){
                name
            }
        }
    `
    await graphQLClient.request(publish,{id:account_to_publish})
}