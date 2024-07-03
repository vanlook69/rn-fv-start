{
	// Place your snippets for javascript here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	// "Print to console": {
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
	// }

	"Crear un App en React-Native": {
		"prefix": "ermp-App-nt",
		"body": [
			"import React from 'react';",
			"import { Provider } from 'react-redux';",
			"import { ApolloProvider } from '@apollo/client';",
			"import { NavigationContainer } from '@react-navigation/native';",
			"import store from '@redux/store.js';",
			"import client from './src/apollo/apollo.js';",
			"import PrivateRoute from './src/routes/PrivateRoute.js';",
			"",
			"function App() {",
			"  return (",
			"	<ApolloProvider client={client}>",
			"	  <Provider store={store}>",
			"		<NavigationContainer>",
			"		  <PrivateRoute />",
			"		</NavigationContainer>",
			"	  </Provider>",
			"	</ApolloProvider>",
			"  );",
			"}",
			"export default App;",
		],
		"description": "Crear un App en React-Native"
	},


	"Crear un apollo en React-Native": {
		"prefix": "ermp-apollo-nt",
		"body": [
			"import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';",
			"import { setContext } from '@apollo/client/link/context';",
			"import AsyncStorage from '@react-native-async-storage/async-storage';",
			"",
			"const httpLink = createHttpLink({",
			"  uri: 'http://localhost:4000/',",
			"});",
			"",
			"const authLink = setContext(async (_, { headers }) => {",
			"  const token = await AsyncStorage.getItem('token');",
			"  return {",
			"	headers: {",
			"	  ...headers,",
			"	  authorization: token ? `Bearer ${token}` : '',",
			"	},",
			"  };",
			"});",
			"",
			"const client = new ApolloClient({",
			"  connectToDevTools: true,",
			"  cache: new InMemoryCache(),",
			"  link: authLink.concat(httpLink),",
			"});",
			"",
			"export default client;",
		],
		"description": "Crear un apollo en React-Native"
	},	

	"Crear un store de Redux-toolkit": {
		"prefix": "ermp-redux-store",
		"body": [
			"import { configureStore } from '@reduxjs/toolkit';",
			"import { userSlice } from './slices/userSlice.js';",
			"",
			"export const Store = configureStore({",
			"  reducer: {",
			"	user: userSlice.reducer,",
			"  },",
			"});",
			"",
			"export default Store;",
		],
		"description": "Crear un store de Redux-toolkit"
	},

	"Crear un slice de Redux-toolkit": {
		"prefix": "ermp-redux-slice",
		"body": [
			"import { createSlice } from '@reduxjs/toolkit';",
			"",
			"export const EmptyState = {",
			"  ${1:isAuthenticated}: false,",
			"};",
			"",
			"export const ${2:template}Slice = createSlice({",
			"  name: '${3:name}',",
			"  initialState: EmptyState,",
			"  reducers: {",
			"    ${4:setAuthenticated}: (state, action) => {",
			"      state.${1:isAuthenticated} = action.payload.${1:isAuthenticated};",
			"    },",
			"  },",
			"});",
			"",
			"export const { ${4:setAuthenticated} } = ${2:template}Slice.actions;",
			"export const select${5:Template} = (state) => state.${3:name};",
		],
		"description": "Crear un slice de Redux-toolkit"
	},

	"Crear un componente en React-Native": {
		"prefix": "ermp-comp-nt",
		"body": [
			"import React from 'react';",
			"import { View } from 'react-native';",
			"import { Text } from 'react-native-elements';",
			"import { styles } from './${1:Setting}.styles';",
			"",
			"export default function ${1:Setting}() {",
			"  return (",
			"	<View style={styles.container}>",
			"	  <Text>${1:Setting}</Text>",
			"	</View>",
			"  );",
			"}",
		],
		"description": "Crear un componente en React-Native"
	},

	"Crear un styles en React-Native": {
		"prefix": "ermp-styles-nt",
		"body": [
			"import { StyleSheet } from 'react-native';",
			"",
			"export const styles = StyleSheet.create({",
			"  container: {",
			"	flex: 1,",
			"	backgroundColor: '#fff',",
			"	alignItems: 'center',",
			"	justifyContent: 'center',",
			"  },",
			"});",
		],
		"description": "Crear un styles en React-Native"
	},

	"Crear un index en React-Native": {
		"prefix": "ermp-index-nt",
		"body": [
			"export * from './${1:Setting}';",
		],
		"description": "Crear un index en React-Native"
	},
}