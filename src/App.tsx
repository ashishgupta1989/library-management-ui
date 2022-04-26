import * as React from 'react';
import Menu from './components/Menu'
import { Routes, Route } from "react-router-dom";
import CreateReader from './screens/CreateReader'
import Booking from './screens/Booking'
import Books from './screens/Books'
import Readers from './screens/Readers'
import Navigations from './components/Navigations'

export default function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Navigations/>} />
        <Route path="/reader/create" element={<CreateReader />} />
        <Route path="/books" element={<Books />} />
        <Route path="/readers" element={<Readers />} />
        <Route path="/booking/create" element={<Booking />} />
      </Routes>
    </>
  );
}