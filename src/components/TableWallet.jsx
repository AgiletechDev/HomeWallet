import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useTheme,
  useMediaQuery,
  Box,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

function createData(t, categoryKey, allocationKey, descriptionKey, vestingKey) {
  return {
    category: t(categoryKey),
    allocation: t(allocationKey),
    description: t(descriptionKey),
    vesting: t(vestingKey),
  };
}

export const TableWallet = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();

  const rows = [
    createData(
      t,
      'ROW1_CATEGORY_TOK',
      'ROW1_ALLOCATION_TOK',
      'ROW1_DESCRIPTION_TOK',
      'ROW1_VESTING_TOK'
    ),
    createData(
      t,
      'ROW2_CATEGORY_TOK',
      'ROW2_ALLOCATION_TOK',
      'ROW2_DESCRIPTION_TOK',
      'ROW2_VESTING_TOK'
    ),
    createData(
      t,
      'ROW3_CATEGORY_TOK',
      'ROW3_ALLOCATION_TOK',
      'ROW3_DESCRIPTION_TOK',
      'ROW3_VESTING_TOK'
    ),
    createData(
      t,
      'ROW4_CATEGORY_TOK',
      'ROW4_ALLOCATION_TOK',
      'ROW4_DESCRIPTION_TOK',
      'ROW4_VESTING_TOK'
    ),
  ];

  return (
    <Box sx={{ width: isMobile ? '100%' : '1000px', mt: '5em' }}>
      <TableContainer
        sx={{
          mt: '5em',
          borderRadius: '12px',
          overflowX: 'auto',
          mb: '5em',
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
                {t("HEADER_CATEGORY_TOK")}
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
                {t("HEADER_ALLOCATION_TOK")}
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
                {t("HEADER_DESCRIPTION_TOK")}
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
                {t("HEADER_VESTING_TOK")}
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
                    background:
                      'linear-gradient(97deg, rgba(51,39,123,1) 0%, rgba(32,58,115,1) 100%)',
                  }}
                >
                  {row.category}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: '#fff',
                    borderRadius: '10px',
                    background:
                      'linear-gradient(97deg, rgba(51,39,123,1) 0%, rgba(32,58,115,1) 100%)',
                  }}
                >
                  {row.allocation}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: '#fff',
                    borderRadius: '10px',
                    background:
                      'linear-gradient(97deg, rgba(51,39,123,1) 0%, rgba(32,58,115,1) 100%)',
                  }}
                >
                  {row.description}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: '#fff',
                    borderRadius: '10px',
                    background:
                      'linear-gradient(97deg, rgba(51,39,123,1) 0%, rgba(32,58,115,1) 100%)',
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
