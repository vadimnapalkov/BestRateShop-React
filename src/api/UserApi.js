import { client } from "../index";
import { gql } from "apollo-boost";
import axios from "axios";
import config from "../config/app.config";

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
      authUser(input: { name: "${user.name}", password: "${user.pass}" }) {
        id
        name
        photo
      }
    }
  `
  });
  return res.data.authUser;
};

export const userSessionApi = async () => {
  const res = await axios.get(config.serverDomain + `/session/user`, {
    withCredentials: true
  });
  let User = null;
  if (res.data) User = JSON.parse(res.data);
  return User;
};

export const logoutSessionUserApi = async () => {
  await axios.get(config.serverDomain + `/session/logout`, {
    withCredentials: true
  });
};
