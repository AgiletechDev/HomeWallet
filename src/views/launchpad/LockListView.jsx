import {
  Box,
  Typography,
  Button,
  TextField,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import * as React from 'react'
import { useTranslation } from 'react-i18next'

function createData(index, name, symbol, address, amount) {
  return {
    index,
    name,
    symbol,
    address,
    amount,
    action: (
      <Button
        variant="contained"
        sx={{
          color: 'white',
          background:
            'linear-gradient(83deg, rgba(62,56,123,1) 0%, rgba(49,76,116,1) 100%)',
        }}
      >
        View
      </Button>
    ),
  }
}

const rows = [
  createData('0', 'Enetty', 'ENT', 'Ox13774 _. be23f24', '2000'),
  createData('1', 'Noni_PIE', 'NOMI', 'Ox13774 _. be23f24', '1000'),
  createData('2', 'Bread D', 'Cooke', 'Ox13774 _. be23f24', '30000'),
  createData('3', 'CDT', 'TTT', 'Ox13774 _. be23f24', '0'),
]

export const LockListView = () => {
  const [value, setValue] = React.useState('one')
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const { t } = useTranslation();

  return (
    <Box
      sx={{ width: isMobile ? '100%' : '1000px', padding: '1em', mt: '5em' }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Typography sx={{ textAlign: 'left' }} variant="h4" fontWeight="bold">
          {t("LAUNCHPAD_LOCKLIST_TITLE")}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3em',
            mt: '2em',
            width: '100%',
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="primary"
              indicatorColor="primary"
              aria-label="secondary tabs example"
            >
              <Tab value="one" label={t("LAUNCHPAD_LOCKLIST_SUBTITLE1")} />
              <Tab value="two" label={t("LAUNCHPAD_LOCKLIST_SUBTITLE2")} />
            </Tabs>
            <TextField
              label={t("LAUNCHPAD_LOCKLIST_INPUT")}
              placeholder="0.0"
              fullWidth={true}
              sx={{ mt: '1em' }}
            />
          </Box>
          <TableContainer
            sx={{
              mt: '2em',
              borderRadius: '12px',
              overflowX: 'auto',
              width: '100%',
            }}
            component={Paper}
          >
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#c9c9c9' }}>
                  <TableCell sx={{ color: 'black' }}>{t("LAUNCHPAD_LOCKLIST_TABLECELL")}</TableCell>
                  <TableCell align="center" sx={{ color: 'black' }}>
                    {t("LAUNCHPAD_LOCKLIST_TABLECELL0")}
                  </TableCell>
                  <TableCell align="center" sx={{ color: 'black' }}>
                    {t("LAUNCHPAD_LOCKLIST_TABLECELL1")}
                  </TableCell>
                  <TableCell align="left" sx={{ color: 'black' }}>
                    {t("LAUNCHPAD_LOCKLIST_TABLECELL2")}
                  </TableCell>
                  <TableCell align="left" sx={{ color: 'black' }}>
                    {t("LAUNCHPAD_LOCKLIST_TABLECELL3")}
                  </TableCell>
                  <TableCell align="left" sx={{ color: 'black' }}>
                    {t("LAUNCHPAD_LOCKLIST_TABLECELL4")}
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
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ color: '#14A8FC' }}
                    >
                      {row.index}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.symbol}</TableCell>
                    <TableCell align="justify" sx={{ color: '#14A8FC' }}>
                      {row.address}
                    </TableCell>
                    <TableCell align="justify">{row.amount}</TableCell>
                    <TableCell align="center">{row.action}</TableCell>
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
              mb: '5em',
            }}
          >
            <Typography textAlign="justify" variant="p">
              <span style={{ color: '#14A8FC' }}>{t("LAUNCHPAD_DISCLAIMER")} </span>
              {t("LAUNCHPAD_DISCLAIMER_TEXT")}
            </Typography>
            <Button
              variant="contained"
              sx={{
                marginTop: '30px',
                borderRadius: '10px',
                textTransform: 'initial',
                background:
                'linear-gradient(83deg, rgba(62,56,123,1) 0%, rgba(49,76,116,1) 100%)',
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
