import Layout from '../components/Layout';
import '../styles/global.css'

function App({ Component, pageProps}) {
    return(
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default App;