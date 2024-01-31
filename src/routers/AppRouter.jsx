
import App from "../App";
import { createBrowserRouter } from 'react-router-dom'
import Home from "../pages/Home";
import Tokenomics from "../pages/Tokenomics";
import BuyWallets from "../pages/BuyWallets";
import BackersPartners from "../pages/BackersPartners";
import RoadMap from "../pages/RoadMap";
import WhitePaper from "../pages/WhitePaper";
import SmartContract from "../pages/SmartContract";


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
        {
          path: '/buywallets',
          element: <BuyWallets />,
        },
        {
          path: '/backersandpartners',
          element: <BackersPartners />,
        },
        {
          path: '/roadmap',
          element: <RoadMap />,
        },
        {
          path: '/smartcontract',
          element: <SmartContract />,
        },
        {
          path: '/whitepaper',
          element: <WhitePaper />,
        },
        
      ],
    },
  ])