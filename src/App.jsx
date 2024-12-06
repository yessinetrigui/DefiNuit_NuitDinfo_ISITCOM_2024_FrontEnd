import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chaos from './Chaos';
import NotFound from './NotFound'; // Component for "/*" path

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chaos" element={<Chaos />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
