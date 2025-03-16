import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Footer.css'
import MainView from './MainView'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainView />
  </StrictMode>,
)
