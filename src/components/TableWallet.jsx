import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import { useTranslation } from 'react-i18next'

function createData(category, allocation, description, vesting, rows=[]) {
  return {
    category,
    allocation,
    description: {
      main: description,
      rows: rows
    },
    vesting
  };
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
      t("TOKENOMIC_VESTING4"),
      [
        "-600,000 VIC for Team are allocated each month to company operations to invest in R&D and Marketing departments.",
        "-400,000 VIC for Ecosytem allocated to reward the wallet ecosystem, including staking rewards and others incentives for users.",
      ]
    ),
  ];

  return (
    <Box sx={{ width: '100%', maxWidth: '1000px',  mt: '5em' }}>
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
                  borderTopLeftRadius: '10px',
                  backgroundColor: '#5db5ff',
                  fontWeight: 'bold',
                }}
              >
                {t("TOKENOMIC_CATEGORY")}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: '#fff',
                  backgroundColor: '#5db5ff',
                  fontWeight: 'bold',
                }}
              >
                {t("TOKENOMIC_ALLOCATION")}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: '#fff',
                  backgroundColor: '#5db5ff',
                  fontWeight: 'bold',
                }}
              >
                {t("TOKENOMIC_DESCRIPTION")}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: '#fff',
                  backgroundColor: '#5db5ff',
                  borderTopRightRadius: '10px',
                  fontWeight: 'bold',
                }}
              >
                {t("TOKENOMIC_VESTING")}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  '&:last-child td, &:last-child th': { borderBottom: 0 },
                }}
              >
                <TableCell
                  align="center"
                  component="th"
                  scope="row"
                  sx={{
                    color: 'black',
                    fontWeight: 'bold',
                    textWrap: 'nowrap',
                    background: '#f4f4f4',
                  }}
                >
                  {row.category}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: 'black',
                    fontWeight: 'bold',
                    textWrap: 'nowrap',
                    background: '#f4f4f4',
                  }}
                >
                  {row.allocation}
                </TableCell>
                <TableCell
                  sx={{
                    gap: 3,
                    color: 'black',
                    borderRadius: '10px',
                    background: '#f4f4f4',
                  }}
                >
                  <span>{row.description.main}</span>
                  {
                    !!row.description.rows?.length && 
                    <ul className='flex gap-2 flex-col mt-6'>
                      {
                        row.description.rows.map((text, index) => (
                          <li key={index} className='flex gap-2'>
                            <div>
                              <div className='flex justify-center items-center border-2 border-black rounded-full'>
                                <div className='bg-[#5db5ff] w-2 h-2 m-[1px] rounded-full' />
                              </div>
                            </div>
                            <span className='text-start italic text-black'>{text}</span>
                          </li>
                        ))
                      }
                    </ul>
                  }
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: 'black',
                    borderRadius: '10px',
                    background: '#f4f4f4',
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