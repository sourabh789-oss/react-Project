import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ApplicationData from './Context/ApplicationData.jsx'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
   defaultOptions:{
     queries:{
       refetchOnWindowFocus:false,//prevents unnecessary api calls when user switches tabs
       retry:1,//retry one time on error when data fetch of any api 

     }
   }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <ApplicationData>
    <App />
    </ApplicationData>
    </QueryClientProvider>
  </StrictMode>,
)
