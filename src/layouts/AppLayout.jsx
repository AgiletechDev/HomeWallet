import PropTypes from 'prop-types';
// import { Header } from '../components/Header';
import Navbar from '../components/Navbar';
import { Box } from '@mui/material';
import Footer from '../components/Footer';

export const AppLayout = ({ children }) => {
  return (
    <Box className='pt-16'>
      {/* <Header /> */}
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
};
