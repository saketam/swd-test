import '../app/locale/i18n'
import "../app/styles/globals.css"

import Layout from "@components/AppLayout";
import type { AppProps } from "next/app";
import { Provider } from 'react-redux'
import store from '@features/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp