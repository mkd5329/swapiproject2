


import React from 'react';
import CharListComponent from './CharListComponent';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CharacterPage from './components/CharacterPage';

function App() {
  return ( <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CharListComponent/>}></Route>
      <Route path="/characters/:id" element={<CharacterPage/>} ></Route>
      
      
      
    </Routes>
    </BrowserRouter>
    
     
     </div>
  );
}

export default App;
