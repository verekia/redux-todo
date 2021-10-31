import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from '../lib/redux'

import '../styles/IndexPage.module.scss'

const store = createStore(
  reducer,
  typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
)

export default App
