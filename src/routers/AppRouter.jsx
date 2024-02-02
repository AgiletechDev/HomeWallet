
import App from "../App";
import { createBrowserRouter } from 'react-router-dom'
import Home from "../pages/main/Home";
import Tokenomics from "../pages/main/Tokenomics";
import BuyWallets from "../pages/main/BuyWallets";
import BackersPartners from "../pages/main/BackersPartners";
import RoadMap from "../pages/main/RoadMap";
import WhitePaper from "../pages/main/WhitePaper";
import SmartContract from "../pages/main/SmartContract";
import Blog from "../pages/main/Blog";
import LaunchPad from "../pages/main/LaunchPad";
import { BuyWallet, ConnectWallet, Lock, RabGrow, Token } from "../pages/launchpad";
import RabSale from "../pages/launchpad/RabSale";


export const launchPadRoutes = [
  {
    path: 'rabsale',  // Cambiado a ruta relativa
    element: <RabSale />,
  },
  {
    path: 'token',
    element: <Token />,
  },
  {
    path: 'lock',
    element: <Lock />,
  },
  {
    path: 'rabgrow',
    element: <RabGrow />,
  },
  {
    path: 'buywallet',
    element: <BuyWallet />,
  },
  {
    path: 'connectwallet',
    element: <ConnectWallet />,
  },
  {
    path: '',
    element: <Home />,
  },
];

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
        {
          path: '/blog',
          element: <Blog/>,
        },
        {
          path: '/launchpad',
          element: <LaunchPad/>,

        },
        {
          path: '/launchpad/rabsale',
          element: <RabSale />,
        },
        {
          path: '/launchpad/token',
          element: <Token />,
        },
        {
          path: '/launchpad/lock',
          element: <Lock />,
        },
        {
          path: '/launchpad/rabgrow',
          element: <RabGrow />,
        },
        {
          path: '/launchpad/buywallet',
          element: <BuyWallet />,
        },
        {
          path: '/launchpad/connectwallet',
          element: <ConnectWallet />,
        },
        {
          path: '',
          element: <Home />,
        },
      ],
    },
  ])