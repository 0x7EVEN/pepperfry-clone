import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home/Home";
import {useState} from 'react';

function App () {
  const [login, setLogin] = useState(true);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
