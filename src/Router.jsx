import { Route, Routes } from 'react-router-dom';
import {
  BackersPartners,
  BuyWallets,
  Home,
  RoadMap,
  SmartContract,
  Tokenomics,
  WhitePaper,
} from './pages/main';
import { Blog } from './components';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tokenomics' element={<Tokenomics />} />
      <Route path='/buy-wallets' element={<BuyWallets />} />
      <Route path='/backers-partners' element={<BackersPartners />} />
      <Route path='/roadmap' element={<RoadMap />} />
      <Route path='/smartcontract' element={<SmartContract />} />
      <Route path='/whitepaper' element={<WhitePaper />} />
      <Route path='/blog' element={<Blog />} />
    </Routes>
  );
};
