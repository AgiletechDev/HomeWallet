import { Box, Typography } from "@mui/material"
import roadmap from '../../assets/images/portal/image8.png'
import roadmaptitle from '../../assets/images/portal/roadmap.png'

export const FirstSection = () => {
  return (
    <Box sx={{marginTop: '40px', width: '80%'}}>
      <img src={roadmaptitle} alt="title roadmap" height='120px' />
        <Box marginTop='50px'>
        {/* <Typography variant="h2">ROADMAP</Typography>
        <Typography variant="h4">Roadmap</Typography> */}
            <img src={roadmap} alt="roadmap" />
        </Box>
    </Box>
  )
}
