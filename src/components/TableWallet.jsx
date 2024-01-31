import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function createData(category, allocation, description, vesting) {
  return { category, allocation, description, vesting }
}

const rows = [
  createData(
    'Community',
    '55% of max supply',
    'The worldwide community of users holds the majority of the max supply of RAB Token to vote and recommend features, in-app updates, and other important changes',
    'Already distributed to users'
  ),
  createData(
    'Liquidity Pool',
    '7% of max supply',
    'Used to add to the liquidity pool on a decentralized exchange (DEX). In which,  BSC network accounts for 6% and Arbitrum accounts for the 1% of the max supply',
    'Locked for 5 years'
  ),
  createData(
    'Reserve Funding',
    '2% of max supply',
    'Used to meet any future expenses of financial obligations, especially unexpected arises',
    'Distributed when needed and when unexpected arises'
  ),
  createData(
    'Burn',
    '36% of max supply',
    `All 36% of RAB in max supply has been burned (including 21,6% of Team and 14,4% of Ecosystem) \n WALLET team will mint 100,000,000 RAB monthly until the max supply of 100,000,000 RAB is reached and distributed proportionally:\n600.000 RAB for Team is allocated to the company's operations each month to invest in R&D and Marketing departments\n400.000 RAB for Team is allocated to reward the wallet's ecosystem including Staking rewards and other incentives for users`,
    'Mined and distributed monthly for 36 months from the time of TGE+1'
  ),
]
export const TableWallet = () => {
  return (
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
          <TableRow sx={{ backgroundColor: '#26abdf' }}>
            <TableCell sx={{ color: '#fff' }}>Category</TableCell>
            <TableCell align="center" sx={{ color: '#fff' }}>
              Allocation
            </TableCell>
            <TableCell align="left" sx={{ color: '#fff' }}>
              Description
            </TableCell>
            <TableCell align="left" sx={{ color: '#fff' }}>
              Vesting
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
                {row.category}
              </TableCell>
              <TableCell align="center">{row.allocation}</TableCell>
              <TableCell align="justify">{row.description}</TableCell>
              <TableCell align="justify">{row.vesting}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
