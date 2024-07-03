import React from "react";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import store from "@redux/store.js";
import client from "./src/apollo/apollo.js";
import PrivateRoute from "./src/routes/PrivateRoute.js";

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <PrivateRoute />
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
}
export default App;
