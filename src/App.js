import logo from './logo.svg';
import './App.css';
import { BarcodeScanner } from './components/BarcodeScanner';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className='container-fluid-md'>
          <BarcodeScanner/>
      </div>
    </div>
  );
}

export default App;
