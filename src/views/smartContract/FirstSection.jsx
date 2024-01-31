import { Box, Typography } from '@mui/material'

import { Blog } from '../../components'

export const FirstSection = () => {
  return (
    <Box sx={{ width: '1000px', padding: '1em'}}>
      <Box>
        <Typography
          textAlign="center"
          variant="h4"
          fontWeight="700"
          color="#1fa2dc"
        >
          Tokenomics BLOG
        </Typography>
        <Blog />
      </Box>
    </Box>
  )
}
