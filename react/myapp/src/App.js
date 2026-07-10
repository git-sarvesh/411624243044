import './App.css';
import First from './first';
import { Add, Subtract, Multiply, Divide } from './math';
import Mycounter from './Mycounter';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />

        <div className="content">
          <Mycounter />
          <First />
          <Routes>
            <Route path="/add" element={<Add />} />
            <Route path="/subtract" element={<Subtract />} />
            <Route path="/multiply" element={<Multiply />} />
            <Route path="/divide" element={<Divide />} />
            <Route
              path="/"
              element={<div>Select an operation from the menu above.</div>}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}
export default App;
