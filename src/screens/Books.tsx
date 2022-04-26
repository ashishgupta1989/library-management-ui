import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux'

const Books = () => {
  let navigate = useNavigate();
  const books = useSelector((state: any) => state.library.books)

  return (
    <div style={{margin: 15}}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{marginBottom: 15}}>
        Books
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Book Name</TableCell>
              <TableCell align="right">Author</TableCell>
              <TableCell align="right">Publisher</TableCell>
              <TableCell align="right">Genre</TableCell>
              <TableCell align="right">Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((row: any) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.author}</TableCell>
                <TableCell align="right">{row.publisher}</TableCell>
                <TableCell align="right">{row.genre}</TableCell>
                <TableCell align="right">{row.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="text" onClick={() => navigate('/')} style={{marginTop: 15}}>Back</Button>
    </div>
  );
}

export default Books;