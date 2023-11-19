import logo from './logo.svg';
import './App.css';
import { BarcodeScanner } from './components/BarcodeScanner';
import LogIn from './components/LogIn';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from './components/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LogIn/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/barcodescanner' element={<BarcodeScanner/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
