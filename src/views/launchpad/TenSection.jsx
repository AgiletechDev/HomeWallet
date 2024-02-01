import { Box, Typography, Button } from '@mui/material'
import { FooterLaunchpad } from '../../components'
import image11 from '../../assets/images/launchpad/image11.png'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function createData(index, name, symbol, address, amount, action) {
  return { index, name, symbol, address, amount, action }
}
const rows = [
  createData(
    '0',
    'Enetty',
    'ENT',
    'Ox13774 _. be23f24',
    '2000',
    'View'
  ),
  createData(
    '1',
    'Noni_PIE',
    'NOMI',
    'Ox13774 _. be23f24',
    '1000',
    'View'
  ),
  createData(
    '2',
    'Bread D',
    'Cooke',
    'Ox13774 _. be23f24',
    '30000',
    'View'
  ),
  createData(
    '3',
    'CDT',
    'TTT',
    'Ox13774 _. be23f24',
    '0',
    'View'
  ),
]
export const TenSection = () => {
  return (
    <Box sx={{ width: '1000px', padding: '1em', mt: '5em' }}>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography textAlign="center" variant="h3" fontWeight="bold">
          Liquidity Sale
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3em' }}>
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
                  <TableCell sx={{ color: 'black' }}>Index</TableCell>
                  <TableCell align="center" sx={{ color: 'black' }}>
                    Name
                  </TableCell>
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
                      {row.index}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
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
      <FooterLaunchpad />
    </Box>
  )
}
