import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import Datepage from './pages/Datepage';
import Informationpage from './pages/Informationpage';
import Tourplan from './pages/Tourplanpage';
import Tourplanpage from './pages/Tourplanpage';
import Locationpage from './pages/Locationpage';
import Gallerypage from './pages/Gallerypage';

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
