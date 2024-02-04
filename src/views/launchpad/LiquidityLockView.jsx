import { Box, Typography, Button, TextField } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

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
  const [value, setValue] = React.useState('one')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Box sx={{ width: '1000px', padding: '1em', mt: '5em' }}>
      <Box
        sx={{ display: 'flex', flexDirection: 'column',  alignItems: 'flex-start' }}
      >
         <Typography sx={{ textAlign: 'left' }} variant="h4" fontWeight="bold">
          Liquidity Lock View
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3em', mt:'2em' }}>
          <Box sx={{ width: '100%'}}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="primary"
              indicatorColor="primary"
              aria-label="secondary tabs example"
            >
              <Tab value="one" label="All Lock" />
              <Tab value="two" label="My Lock" />
            </Tabs>
            <TextField label="Search by name, symbol or token address..." placeholder="0.0" fullWidth="true" sx={{mt:'1em'}}/>
          </Box>
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
                      backgroundColor: 'white',
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.token}
                    </TableCell>
                    <TableCell align="center">{row.symbol}</TableCell>
                    <TableCell align="justify" sx={{color:"#14A8FC"}}>{row.address}</TableCell>
                    <TableCell align="justify" >{row.amount}</TableCell>
                    <TableCell align="justify">{row.action}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: 'fit-content',
              margin: '0 auto',
              mb:'5em'
            }}
          >
            <Typography textAlign="justify" variant="p">
              <span style={{ color: '#14A8FC' }}>Disclaimer: </span>The
              information provided shall not in any way constitute a
              recommendation as to whether you should invest in any product
              discussed. We accept no liability for any loss occasioned to any
              person acting or refraining from action as a result of any
              material provided or published
            </Typography>
            <Button
              variant="contained"
              sx={{
                marginTop: '30px',
                borderRadius: '10px',
                textTransform: 'initial',
                background:
                    'linear-gradient(242deg, rgba(1,89,255,1) 0%, rgba(54,182,255,1) 100%)',
              }}
            >
              Connect Wallet
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
