import PropTypes from 'prop-types';
import { Box } from '@mui/material';

export const ViewSection = ({ className, children, before, after }) => {
  return (
    <Box className={className}>
      {before}
      <Box maxWidth='900px' className='px-2 sm:px-0' marginX='auto'>
        {children}
      </Box>
      {after}
    </Box>
  );
};

ViewSection.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  before: PropTypes.node,
  after: PropTypes.node,
};
