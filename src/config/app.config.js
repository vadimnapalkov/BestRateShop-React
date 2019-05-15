import config from "./config";

const appConfig = {
  env: process.env.NODE_ENV || config.env,
  domain: process.env.DOMAIN || config.domain,
  serverDomain: process.env.SERVER_DOMAIN || config.serverDomain
};

export default appConfig;
