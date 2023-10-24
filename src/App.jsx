import { Auth0ProviderWithNavigate } from "./auth0-provider-with-navigate";
import Homepage from "./pages/Homepage";
import CallbackPage from "./pages/callback-page";
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/callback" element={<CallbackPage />} />
        </Routes>
      
      
    </BrowserRouter>
      
  )
}


export default App