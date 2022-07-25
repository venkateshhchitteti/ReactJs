import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div >
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);   
export default App;
