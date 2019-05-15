import { client } from "../index";
import { gql } from "apollo-boost";

export const RegisterUserApi = async user => {
  const res = await client.mutate({
    variables: { name: user.name, password: user.pass },
    mutation: gql`
      mutation registrationUser($name: String!, $password: String!) {
        registrationUser(input: { name: $name, password: $password }) {
          id
          name
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
      authorisationUser(input: { name: "${user.name}", password: "${
      user.pass
    }" }) {
        id
        name
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
        authenticateUser {
          id
          name
          photo
        }
      }
    `,
    fetchPolicy: "no-cache"
  });
  console.log(res.data.authenticateUser);
  return res.data.authenticateUser;
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
