import "./style.css";
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { syncHistoryWithStore } from "react-router-redux";
import { Router, Route, browserHistory } from "react-router";
import { Provider } from "react-redux";
import reducers from "./reducers";
import Main from "./containers/main";
import Login from "./containers/login";
import Register from "./containers/register";
import NotFound from "./components/NotFound";
import config from "./config/app.config";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import * as serviceWorker from "./serviceWorker";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    credentials: "include",
    uri: config.serverDomain + "/api"
  })
});
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="*" component={NotFound} />
      </Router>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
