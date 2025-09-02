import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landingpage from './pages/Landingpage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/date' element={<Datepage/>}/>
        <Route path='/information' element={<Informationpage/>}/>
        <Route path='/tourplan' element={<Tourplanpage/>}/>
        <Route path='/location' element={<Locationpage/>}/>
        <Route path='/gallery' element={<Gallerypage/>}/>
      </Routes>
    </div>
  )
}

export default App
