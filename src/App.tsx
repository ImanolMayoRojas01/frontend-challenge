import '@/assets/styles/app.scss'
import RouterApp from './router'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <RouterApp />
    </Provider>
  )
}

export default App
