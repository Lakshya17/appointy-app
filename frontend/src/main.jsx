import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ChakraProvider, extendTheme} from '@chakra-ui/react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SignUp from './components/SignUp/SingUp.jsx';
import LandingPage from './components/Layout/LandingPage.jsx';
import Signin from './components/Signin/Signin.jsx';

const theme = extendTheme({
  colors:{
    footerbg: {
      100: '#404040'
    },
    landingbg: {
      100: '#249782'
    }
  }
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/signin',
        element: <Signin />
      }
    ]
  },
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
