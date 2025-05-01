import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './MainView/MainView.css'
import MainView from './MainView/MainView'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainView />
  </StrictMode>,
)
