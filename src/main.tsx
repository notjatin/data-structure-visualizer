import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UtilityComponent from './components/UtilityComponent.tsx'
import TestingComponent from './TestingComponent.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <TestingComponent>
        <UtilityComponent></UtilityComponent>
        <App />
    </TestingComponent>
  </StrictMode>,
)
