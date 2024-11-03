import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import UtilityComponent from './components/UtilityComponent.tsx'
import TestingComponent from './TestingComponent.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <TestingComponent>
      <UtilityComponent />
    </TestingComponent>
  </StrictMode>,
)
