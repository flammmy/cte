import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="962075549146-5j5hiids3enhfpfuj2llkdqonqur9he9.apps.googleusercontent.com">
       <App/>

    </GoogleOAuthProvider>
  </StrictMode>,
)
