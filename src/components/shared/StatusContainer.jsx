import PropTypes from 'prop-types'
import { Box, Stack } from '@mui/material'

export const StatusContainer = ({ children }) => {
  return (
    <Box className="absolute flex w-full h-full backdrop-blur-md z-10 top-0 left-0 justify-center items-center">
      <Stack
        gap={4}
        bgcolor="#486284"
        color="white"
        padding={4}
        className="shadow-lg rounded-lg"
      >
        {children}
      </Stack>
    </Box>
  )
}

StatusContainer.propTypes = {
  children: PropTypes.node,
}
