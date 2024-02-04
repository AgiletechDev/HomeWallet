import { Box, Typography, Button, Card } from '@mui/material'
import image11 from '../../assets/images/launchpad/image11.png'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function createData(token, symbol, address, amount, action) {
  return { token, symbol, address, amount, action }
}
const rows = [
  createData(
    'Wrapped BNB/Test mainnet contract [WBNB/TMC]',
    'Cake-LP',
    '0x4b868889...c315305',
    '0',
    'View'
  ),
]
export const LiquidityLockView = () => {
  return (
    <Box sx={{ width: '1000px', padding: '1em', mt: '5em' }}>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography textAlign="center" variant="h3" fontWeight="bold">
        Liquidity Lock View
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3em' }}>
          <Card
            sx={{
              mt: '3em',
              width: '100%',
              height: '300px',
              display: 'flex',
              justifyContent: 'space-between',
              borderRadius: '20px',
              paddingLeft: '50px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="h5"
                fontWeight="600"
                sx={{ marginBottom: '10px' }}
              >
                Raise capital and launch your project with easy steps and the
                best fees in the market to reach our global investors.
                Automatically list your Token after successful fundraising on:
                PancakeSwap, UniSwap
              </Typography>

              <Button
                variant="contained"
                sx={{
                  marginTop: '30px',
                  marginBottom: '30px',
                  borderRadius: '10px',
                  textTransform: 'initial',
                  marginRight: '330px',
                }}
              >
                Connect Wallet
              </Button>
            </Box>

            <img src={image11} alt="image11" />
          </Card>
          <Typography textAlign="center" variant="h3" fontWeight="bold">
            Let`s Start
          </Typography>
          <TableContainer
            sx={{
              mt: '2em',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
            component={Paper}
          >
            <Table
              sx={{
                minWidth: 650,
                borderCollapse: 'separate',
                borderSpacing: '5px',
              }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f4f4f4' }}>
                  <TableCell sx={{ color: 'black' }}>Token</TableCell>
                  <TableCell align="center" sx={{ color: 'black' }}>
                    Symbol
                  </TableCell>
                  <TableCell align="left" sx={{ color: 'black' }}>
                    Address
                  </TableCell>
                  <TableCell align="left" sx={{ color: 'black' }}>
                    Amount
                  </TableCell>
                  <TableCell align="left" sx={{ color: 'black' }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      '&:last-child td, &:last-child th': { borderBottom: 0 },
                      backgroundColor: '#f4f4f4',
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.token}
                    </TableCell>
                    <TableCell align="center">{row.symbol}</TableCell>
                    <TableCell align="justify">{row.address}</TableCell>
                    <TableCell align="justify">{row.amount}</TableCell>
                    <TableCell align="justify">{row.action}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography textAlign="left" variant="p">
            Warning: Disclaimer: Make sure your token is not listed on any AMM
            yet The information provided shall not in any way constitute a
            recommendation as to whether you should invest in any product
            discussed. We accept no liability for any loss occasioned to any
            person acting or refraining from action as a result of any material
            provided or published
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: '30px',
              marginBottom: '30px',
              borderRadius: '10px',
              textTransform: 'initial',
              marginRight: '330px',
            }}
          >
            Connect Wallet
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
