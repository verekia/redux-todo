import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from '../lib/redux';
import store from './src/store';
import 'tailwindcss/tailwind.css';
import '../styles/styles.css';

const App = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default App;
