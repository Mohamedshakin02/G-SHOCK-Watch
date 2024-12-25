import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './stylesheet/style.css'
import Menu from './components/Menu'
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Menu/>
  </StrictMode>,
)
