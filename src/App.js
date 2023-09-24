
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ContextComponent from './ContextComponent/Context';
import { useState } from 'react';
import HomePage from './HomePage/HomePage';
function App() {
   const [data,setData]=useState([]);
   const [filteredData,setFilteredData]=useState([]);
  return (
    <ContextComponent.Provider value={{data,setData,filteredData,setFilteredData,}}>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
    </ContextComponent.Provider>
  );
}

export default App;
