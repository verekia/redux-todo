import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Layout from '../layout/Layout'
import rootReducer from './../reducers/index'
import '../styles/styles.css'
const store = createStore(
  rootReducer,
  typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)
const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default App
