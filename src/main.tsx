import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ShowCase from './components/ShowCase.tsx'
import TestingComponent from './TestingComponent.tsx'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <TestingComponent>
      <ShowCase />
    </TestingComponent>
  </StrictMode>,
)
