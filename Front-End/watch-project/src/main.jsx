import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './stylesheet/style.css'  // Imported style sheet from stylesheet folder
import Menu from './components/Menu'  // Imported Menu.jsx file from component folder

// Inserted the Menu component in this file to display the website
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Menu/>
  </StrictMode>,
)
