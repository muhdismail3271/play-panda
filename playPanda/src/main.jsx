import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store/store.js'
import './index.css'
import App from './App.jsx'
import { login } from './redux/slices/authSlice.js'

const savedUser = localStorage.getItem("user");

if(savedUser) {
  store.dispatch(login(JSON.parse(savedUser)))
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App /> 
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
