import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import BussnesesDetails from './pages/BussnesesDetails';

const  App = () => {
  return (
    <div className="App">
      <section>
       <BrowserRouter>
          <Routes >
          <Route path="/" element={<BussnesesDetails />} />
          </Routes >
        </BrowserRouter>
      </section>
    </div>
  );
};

export default App;
