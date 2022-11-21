import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import BusinessDetails from './views/BusinessDetails/BusinessDetails';
import HomePage from './views/HomePage/HomePage';

const  App = () => {
  return (
    <div className="App">
      <section>
       <BrowserRouter>
          <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/businesses/:businessId" element={<BusinessDetails />} />
          </Routes >
        </BrowserRouter>
      </section>
    </div>
  );
};

export default App;
