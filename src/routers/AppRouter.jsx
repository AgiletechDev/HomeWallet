
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
import LaunchPad from "../pages/launchpad/LaunchPad";
import {  Lock, RabGrow, Token, ViewSales } from "../pages/launchpad";
import RabSale from "../pages/launchpad/RabSale";
import { LockList } from "../pages/launchpad/LockList";
import { LiquidityLock } from "../pages/launchpad/LiquidityLock";
import { ListGrow } from "../pages/launchpad/ListGrow";



export const launchPadRoutes = [
  {
    path: 'rabsale',
    element: <ViewSales />,
  },
  {
    path: 'createsale',
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
    path: '/launchpad/listgrow',
    element: <ListGrow />,
  },

  {
    path: 'liquidity',
    element: <LiquidityLock />,
  },
  {
    path:'listlocks',
    element:<LockList/>
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
          path: '/launchpad/createsale',
          element: <RabSale />,
        },
        {
          path: '/launchpad/rabsale',
          element: <ViewSales />,
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
          path: '/launchpad/listgrow',
          element: <ListGrow />,
        },
        {
          path: '/launchpad/rabgrow',
          element: <RabGrow />,
        },
        {
          path: '/launchpad/liquidity',
          element: <LiquidityLock />,
        },
        {
          path:'/launchpad/listlocks',
          element:<LockList/>
        },
        {
          path: '',
          element: <Home />,
        },
      ],
    },
  ])