import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './routes/Router.jsx'
import { AuthProvider } from './context/AuthProvider'
import 'aos/dist/aos.css'

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { HelmetProvider } from 'react-helmet-async'
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Router} />
      </QueryClientProvider>
      <HelmetProvider />
    </AuthProvider>
  </React.StrictMode>,
)
