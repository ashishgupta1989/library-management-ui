import * as React from 'react';
import Button from '@mui/material/Button';
import './index.css';
import { useNavigate } from "react-router-dom";

interface IButton {
  label: string,
  path: string
}

const BUTTONS: IButton[] = [
  {
    label: 'Create Reader',
    path: '/reader/create'
  },
  {
    label: 'Books',
    path: '/books'
  },
  {
    label: 'Readers',
    path: '/readers'
  },
  {
    label: 'Booking',
    path: '/booking/create'
  }
]
const Navigations = () => {
  let navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  }
  return (
    <div className='button-container'>
      {BUTTONS.map((button, index) =>  <span className="button" key={index}>
        <Button onClick={() => handleNavigation(button.path)} variant="contained" size="large">{button.label}</Button>
      </span>)}
    </div>
  );
}

export default Navigations