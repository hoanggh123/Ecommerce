import { BrowserRouter, Route, Routes } from 'react-router-dom';  // Chỉnh sửa 'Router' thành 'Routes'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Header from './components/header';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries");
  }, [])
  const getCountry = async (url) => {
    const responsive = await axios.get(url).then((res) => {
      setCountryList(res.data.data)
    })
    console.log(responsive);

  }
  const values = { countryList, setSelectedCountry, selectedCountry }
  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>  
          <Route path='/' element={<Home />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext }