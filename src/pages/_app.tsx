import '../app/locale/i18n'
import "../app/styles/globals.scss"

import Layout from "@components/AppLayout";
import store from '@features/store';
import type { AppProps } from "next/app";
import { Provider } from 'react-redux'

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