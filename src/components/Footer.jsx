import { Typography, Stack } from '@mui/material';
import iconotelegram from '../assets/images/portal/svg/iconotelegram.svg';
import iconox from '../assets/images/portal/svg/iconox.svg';
import iconodiscord from '../assets/images/portal/svg/iconodiscord.svg';
import iconoYT from '../assets/images/portal/svg/iconoYT.svg';
import { ViewSection } from './ViewSection';

const Footer = () => {
  return (
    <ViewSection className='bg-gradient-to-r from-[rgba(62,56,123,1)] to-[rgba(49,76,116,1)] p-[2em]'>
      <Stack
        justifyContent='center'
        textAlign='center'
        borderRadius='10px'
        sx={{
          background: 'linear-gradient(to right, #3b3f78 14%, #486284 83%)',
          boxShadow: '0px 10px 35px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent='center'
          alignItems='center'
          marginY='10px'
          color='white'
        >
          <Typography
            variant='h6'
            component='p'
            sx={{
              fontSize: '15px',
              letterSpacing: '1px',
            }}
          >
            Powered by
          </Typography>
          <Typography
            variant='h5'
            component='p'
            sx={{
              fontSize: '20px',
              fontWeight: '600',
            }}
          >
            AGILETECH
          </Typography>
        </Stack>

        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          marginY={5}
          gap={{ xs: 2, sm: 8 }}
          flexWrap='wrap'
        >
          <a href='https://t.me/' target='_blank' rel='noopener noreferrer'>
            <img src={iconotelegram} alt='telegram' style={{ width: '40px' }} />
          </a>
          <a
            href='https://twitter.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={iconox} alt='twitter' style={{ width: '40px' }} />
          </a>
          <a
            href='https://discord.gg/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={iconodiscord} alt='discord' style={{ width: '50px' }} />
          </a>
          <a
            href='https://www.youtube.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={iconoYT} alt='youtube' style={{ width: '50px' }} />
          </a>
        </Stack>
      </Stack>
    </ViewSection>
  );
};

export default Footer;
