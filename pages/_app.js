import '../styles/globals.css'
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { store } from "../store/store";
import client from '../apollo-client';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  )
}

export default MyApp
