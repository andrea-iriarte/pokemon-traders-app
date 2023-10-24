import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'

import { Auth0Provider } from '@auth0/auth0-react'


    const domain = import.meta.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = import.meta.env.REACT_APP_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.REACT_APP_AUTH0_CALLBACK_URL;

    

    

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-ahs11jgp3jqvr31i.us.auth0.com"
        clientId="9l7wDS3fZL1n9D3emJp8CY6OomxLwznC"
        authorizationParams={{
            redirect_uri: "http://localhost:5173/callback"
        }}
      >
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/callback" element={<Homepage />} />
        </Routes>
      </Auth0Provider>
      
      
    </BrowserRouter>
    
  </React.StrictMode>,
)
