import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { createUser } from '../common/slices/library';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Booking = () => {
  const dispatch = useDispatch();
  const readers = useSelector((state: any) => state.library.readers)
  
  const books = useSelector((state: any) => state.library.books)

  let navigate = useNavigate();
  return (
    <div className='create-reader-box'>
      <Typography variant="h4" component="h2">
        Create Booking
      </Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { margin: 4, width: '45%' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
        <FormControl fullWidth style={{marginBottom: 30, marginTop: 30}}>
          <InputLabel id="demo-simple-select-label">Reader</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Reader"
            onChange={() => {}}
          >
            {readers.map((reader: any) => 
              <MenuItem value={reader.name}>{reader.name}</MenuItem>
            )}
          </Select>
        </FormControl>
        <FormControl fullWidth style={{marginBottom: 30}}>
          <InputLabel id="demo-simple-select-label">Book</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Book"
            onChange={() => {}}
          >
            {books.map((book: any) => 
              <MenuItem value={book.name}>{book.name}</MenuItem>
            )}
          </Select>
        </FormControl>
        </div>
      </Box>
      <Button style={{marginBottom: 30}}
      variant="contained">Create</Button>
      <Button  style={{marginBottom: 30}} onClick={() => navigate('/')} variant="text" className='cancel-button'>Cancel</Button>
    </div>
  );
}

export default Booking