import { client } from "../index";
import { gql } from "apollo-boost";

export const RegisterUserApi = async user => {
  const res = await client.mutate({
    variables: {
      fullName: user.fullName,
      email: user.email,
      password: user.pass
    },
    mutation: gql`
      mutation registrationUser(
        $fullName: String!
        $email: String!
        $password: String!
      ) {
        registrationUser(
          input: { fullName: $fullName, email: $email, password: $password }
        ) {
          id
          fullName
          email
          photo
        }
      }
    `
  });
  return res.data.registrationUser;
};

export const LoginUserApi = async user => {
  const res = await client.query({
    query: gql`
    {
      authorisationUser(input: { 
         email: "${user.email}", 
         password: "${user.pass}" 
    }) {
        id
        fullName
        email
        photo
      }
    }
  `
  });
  return res.data.authorisationUser;
};

export const userSessionApi = async () => {
  const res = await client.query({
    query: gql`
      {
        authenticationUser {
          id
          fullName
          email
          photo
        }
      }
    `,
    fetchPolicy: "no-cache"
  });
  return res.data.authenticationUser;
};

export const logoutSessionUserApi = async () => {
  await client.mutate({
    mutation: gql`
      mutation {
        logoutUser
      }
    `
  });
};
