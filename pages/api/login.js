import {gql, GraphQLClient} from 'graphql-request'
import { NextResponse, NextRequest } from 'next'

export default async function(req, res){
    const url = process.env.NEXT_PUBLIC_GRAPH_CMS_ENDPOINT
    const graphQLClient=new GraphQLClient (url, {
        headers:{
          "Authorizations": process.env.NEXT_PUBLIC_GRAPH_CMS_TOKEN,
        }
    })
    const variables = {
        email: req.email,
        parola: req.parola
    }
    const query = gql`
        query($email:String!,$parola:String!) {
            userAccount(
                where: {email: $email, parola: $parola}
            ) {
                name,
                email,
                id,
            }
        }
    `
    res = await graphQLClient.request(query,variables).then(value=>value.userAccount)
    return res
}