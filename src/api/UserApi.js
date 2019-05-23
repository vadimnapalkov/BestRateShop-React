import { client } from "../index";
import { gql } from "apollo-boost";

export const RegisterUserApi = async user => {
  const res = await client.mutate({
    variables: {
      full_name: user.full_name,
      email: user.email,
      password: user.pass
    },
    mutation: gql`
      mutation registrationUser(
        $full_name: String!
        $email: String!
        $password: String!
      ) {
        registrationUser(
          input: { full_name: $full_name, email: $email, password: $password }
        ) {
          id
          full_name
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
      authorisationUser(input: { email: "${user.email}", password: "${
      user.pass
    }" }) {
        id
        full_name
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
          full_name
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
