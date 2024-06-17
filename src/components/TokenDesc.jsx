import PropTypes from 'prop-types'
import { Box, Typography, useTheme, useMediaQuery, Grid, Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { FaChevronRight } from 'react-icons/fa'


export const TokenDesc = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const { t } = useTranslation();

  const walletToken = {
    first: [
      {
        title: t("TOKENDESC_TEXT1"),
        subtitle: 'VIC',
      },
      {
        title: 'Token Symbol',
        subtitle: 'RAB',
      },
      {
        title: t("TOKENDESC_TEXT2"),
        subtitle: 'Utility & Governance',
      },
    ],
    second: [
      {
        title: 'Max supply',
        subtitle: '100,000,000',
      },
      {
        title: 'Blockchain network',
        subtitle: 'BNB Smart Chain (BEP20) & Arbitrum (ETH)',
      },
      {
        title: 'Token Decimal',
        subtitle: '18',
      },
    ],
  }

  const walletFirst = isMobile ? [...walletToken.first, ...walletToken.second] : walletToken.first

  return (
    <Stack gap={8} sx={{ padding: '1em' }}>
      <Typography
        color="#0A85D9"
        variant="h5"
        fontWeight="700"
      >
        VICNET TOKEN
      </Typography>
      <Grid container spacing={2} className='w-full'>
        <Grid item xs={12} sm={6}>
          {
            walletFirst.map(({ title ,subtitle }, index) => (
              <TokenDescItem
                key={index}
                title={title}
                subtitle={subtitle}
              />
            ))
          }
        </Grid>
        {
          !isMobile && 
          <Grid item sm={6}>
            {
              walletToken.second.map(({ title ,subtitle }, index) => (
                <TokenDescItem
                  key={index}
                  title={title}
                  subtitle={subtitle}
                />
              ))
            }
          </Grid>
        }
      </Grid>
    </Stack>
  )
}

const TokenDescItem = ({ title, subtitle }) => {

  return (
    <Stack>
      <Stack direction='row' className='my-2' gap={1} alignItems='center'>
        <FaChevronRight size={16} />
        <Typography fontWeight={900} noWrap>
          {title}
        </Typography>
        <Typography>
          {subtitle}
        </Typography>
      </Stack>
      <Box marginY={1} className='h-[1px] w-full bg-gray-700/20 max-w-[300px]' />
    </Stack>
  )
}

TokenDescItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}
