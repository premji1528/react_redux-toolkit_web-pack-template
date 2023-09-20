import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import storeConfig from '@Store/storeConfig'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'

const { persistor, store } = storeConfig();

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  )
