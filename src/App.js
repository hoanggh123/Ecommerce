import { BrowserRouter, Route, Routes } from 'react-router-dom';  // Chỉnh sửa 'Router' thành 'Routes'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>  {/* Sử dụng 'Routes' thay cho 'Router' */}
        <Route path='/' element={<Home />} />  {/* Dùng 'element' cho v6 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
