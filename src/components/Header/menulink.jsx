import { DownhillSkiing } from '@mui/icons-material';
import { Button, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const MenuLink = ({ link, display, links }) => {
  return (
    <Stack component='li'>
      <Link to={link}>{display}</Link>
      <Button>
        <DownhillSkiing />
      </Button>
    </Stack>
  );
};

MenuLink.propTypes = {
  link: PropTypes.string,
  display: PropTypes.string,
  links: PropTypes.array,
};
