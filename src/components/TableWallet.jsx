import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, useTheme, useMediaQuery, Box, Typography } from '@mui/material';

function createData(category, allocation, description, vesting) {
  return { category, allocation, description, vesting };
}

const rows = [
  createData(
    'Comunidad',
    '55% del suministro máximo',
    'La comunidad mundial de usuarios posee la mayor parte del suministro máximo de VIC Token para votar y recomendar funciones, actualizaciones en la aplicación y otros cambios importantes.',
    'Ya distribuido a usuarios de todo el mundo'
  ),
  createData(
    'Fondo de liquidez',
    '7% del suministro máximo',
    'Se utiliza para agregar al fondo de liquidez en un intercambio descentralizado (DEX). En el cual, la red BSC representa el 6% y Arbitrum representa el 1% del suministro máximo.',
    'Bloqueado por 5 años'
  ),
  createData(
    'Financiamiento de reserva',
    '2% del suministro máximo',
    'Se utiliza para cubrir cualquier gasto u obligación financiera futura, especialmente si surge algo inesperado.',
    'Distribuido cuando sea necesario y cuando surja imprevisto.'
  ),
  createData(
    'Quemar',
    '36% del suministro máximo',
    `Se ha quemado el 36% del VIC en suministro máximo (incluido el 21,6% del Equipo y el 14,4% del Ecosistema).El equipo VICNET acuñará 1.000.000 VIC mensualmente hasta alcanzar el suministro máximo de 100.000.000 VIC y distribuirlo proporcionalmente:-600.000 VIC for Team se asignan cada mes a las operaciones de la empresa para invertir en los departamentos de I+D y Marketing.-400,000 VIC para Ecosytem asignados para recompensar el ecosistema de la billetera, incluidas recompensas de apuesta y otros incentivos para los usuarios.`,
    'Extraído y distribuido mensualmente durante 36 meses desde el momento de TGE+1'
  ),
];

export const TableWallet = () => {
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
                Category
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
                Allocation
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
                Description
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
