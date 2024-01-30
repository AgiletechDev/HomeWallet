
import App from "../App";
import { createBrowserRouter } from 'react-router-dom'
import Home from "../pages/Home";
import Tokenomics from "../pages/Tokenomics";


export const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/tokenomics',
          element: <Tokenomics />,
        },
        
      ],
    },
  ])