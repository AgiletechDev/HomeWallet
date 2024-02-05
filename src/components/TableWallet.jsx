import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, useTheme, useMediaQuery, Box } from '@mui/material';
import { useTranslation } from 'react-i18next'

function createData(category, allocation, description, vesting) {
  return { category, allocation, description, vesting };
}


export const TableWallet = () => {

  const { t } = useTranslation();
  const rows = [
    createData(
      t("TOKENOMIC_CATEGORY1"),
      t("TOKENOMIC_ALLOCATION1"),
      t("TOKENOMIC_DESCRIPTION1"),
      t("TOKENOMIC_VESTING1")
    ),
    createData(
      t("TOKENOMIC_CATEGORY2"),
      t("TOKENOMIC_ALLOCATION2"),
      t("TOKENOMIC_DESCRIPTION2"),
      t("TOKENOMIC_VESTING2")
    ),
    createData(
      t("TOKENOMIC_CATEGORY3"),
      t("TOKENOMIC_ALLOCATION3"),
      t("TOKENOMIC_DESCRIPTION3"),
      t("TOKENOMIC_VESTING3")
    ),
    createData(
      t("TOKENOMIC_CATEGORY4"),
      t("TOKENOMIC_ALLOCATION4"),
      t("TOKENOMIC_DESCRIPTION4"),
      t("TOKENOMIC_VESTING4")
    ),
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ width: isMobile ? '100%' : '1000px',  mt: '5em' }}>
      <TableContainer
        sx={{
          mt: '5em',
          borderRadius: '12px',
          overflowX: 'auto',
          mb: '5em',
        }}
        component={Paper}
      >
        <Table sx={{ minWidth: 650, borderCollapse: 'separate', borderSpacing: '5px' }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{}}>
              <TableCell
                align="center"
                sx={{
                  color: '#fff',
                  borderRadius: '10px',
                  backgroundColor: '#7598cf',
                  fontWeight: 'bold',
                }}
              >
                {t("TOKENOMIC_CATEGORY")}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: '#fff',
                  backgroundColor: '#7598cf',
                  borderRadius: '10px',
                  fontWeight: 'bold',
                }}
              >
                {t("TOKENOMIC_ALLOCATION")}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: '#fff',
                  backgroundColor: '#7598cf',
                  borderRadius: '10px',
                  fontWeight: 'bold',
                }}
              >
                {t("TOKENOMIC_DESCRIPTION")}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: '#fff',
                  backgroundColor: '#7598cf',
                  borderRadius: '10px',
                  fontWeight: 'bold',
                }}
              >
                {t("TOKENOMIC_VESTING")}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  '&:last-child td, &:last-child th': { borderBottom: 0 },
                }}
              >
                <TableCell
                  align="center"
                  component="th"
                  scope="row"
                  sx={{
                    color: '#fff',
                    borderRadius: '10px',
                    background: 'linear-gradient(97deg, rgba(51,39,123,1) 0%, rgba(32,58,115,1) 100%)',
                  }}
                >
                  {row.category}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: '#fff',
                    borderRadius: '10px',
                    background: 'linear-gradient(97deg, rgba(51,39,123,1) 0%, rgba(32,58,115,1) 100%)',
                  }}
                >
                  {row.allocation}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: '#fff',
                    borderRadius: '10px',
                    background: 'linear-gradient(97deg, rgba(51,39,123,1) 0%, rgba(32,58,115,1) 100%)',
                  }}
                >
                  {row.description}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: '#fff',
                    borderRadius: '10px',
                    background: 'linear-gradient(97deg, rgba(51,39,123,1) 0%, rgba(32,58,115,1) 100%)',
                  }}
                >
                  {row.vesting}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};