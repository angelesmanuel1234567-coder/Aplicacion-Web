import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './componentes/css/main.css'
import App from './componentes/vistas/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App />
    
  </StrictMode>,
)
