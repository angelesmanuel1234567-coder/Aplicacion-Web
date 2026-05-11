import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './componentes/css/main.css'
import App from './componentes/vistas/App.tsx'
import { CarritoProvider } from "./componentes/contex/CarritoContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CarritoProvider>
      <App />
    </CarritoProvider>
    
  </StrictMode>,
)
