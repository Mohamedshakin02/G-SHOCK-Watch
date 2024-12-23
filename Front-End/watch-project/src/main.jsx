import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Menu from './components/Menu'
import './stylesheet/style.css'
import Intro from './components/Intro'
import About from './components/About'
import Features from './components/Features'
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Menu/>
    <main>
      <Intro/>
      <About/>
      <Features/>
    </main>
  </StrictMode>,
)
