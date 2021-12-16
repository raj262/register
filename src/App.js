import './App.css';
import { BrowserRouter } from "react-router-dom";
// import AppRouter from './router/AppRouter';
import Create from './components/crud/Create';
import Read from './components/crud/read/Read';


function App() {
  return (
    <BrowserRouter>
      <Create />
      <Read />
    </BrowserRouter>
  );
}

export default App;
