import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './index.css'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { updateAddress, updateEmail, updateName, updatePhone } from './slices';
import { useNavigate } from 'react-router';
import { createUser } from '../../common/slices/library';

const CreateReader = () => {
  const dispatch = useDispatch();
  const name = useSelector((state: any) => state.reader.name)
  const address = useSelector((state: any) => state.reader.address)
  const phone = useSelector((state: any) => state.reader.phone)
  const email = useSelector((state: any) => state.reader.email)

  let navigate = useNavigate();
  return (
    <div className='create-reader-box'>
      <Typography variant="h4" component="h2">
        Create User
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
          <TextField
            required
            id="name"
            label="Full Name"
            variant="standard"
            onChange={(e) => dispatch(updateName(e.target.value))}
          />
          <TextField
            required
            id="phone"
            label="Phone#"
            variant="standard"
            onChange={(e) => dispatch(updatePhone(e.target.value))}
          />
          <TextField
            required
            multiline
            id="address"
            label="Address"
            variant="standard"
            onChange={(e) => dispatch(updateAddress(e.target.value))}
          />
          <TextField
            required
            multiline
            id="email"
            label="Email"
            variant="standard"
            onChange={(e) => dispatch(updateEmail(e.target.value))}
          />
        </div>
      </Box>
      <Button onClick={() => {
        dispatch(createUser({
          name,
          phone,
          address,
          email
        }))
        navigate('/readers')
        }}
      variant="contained">Create</Button>
      <Button onClick={() => navigate('/')} variant="text" className='cancel-button'>Cancel</Button>
    </div>
  );
}

export default CreateReader