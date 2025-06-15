import { useState } from 'react';
import './App.css';


import { Routes, Route } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
import Layout from './components/Layout';

import HooksTest from "./pages/HooksTest";


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/test-hooks" element={<HooksTest />} />

        {/* we want to protect these routes */}


        {/* catch all */}
      </Route>
    </Routes>
  )
}

export default App
