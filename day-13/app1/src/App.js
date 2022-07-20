import logo from './logo.svg';
import './App.css';
import Clock from './main';
import React from 'react';
import ReactDOM from 'react-dom/client';
import DropdownMenu from './Dropdownmenu';
import Parent from './architechture';
import Parent1 from './childtoparent';


// function App() {
//   return (
//     <div >
//       <Clock></Clock>
//       <App></App>
      
//     </div>
//   );
// }
const { useState, useEffect } = React;

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  function loadData() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setData([1, 2, 3, 4, 5]);
    }, 1000);
    setInterval(()=>{
      setData(new Date());
    },2000);
  }

  useEffect(loadData, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {data && <pre>{JSON.stringify(data, null, 1)}</pre>}
      <DropdownMenu></DropdownMenu>
      <Parent></Parent>
      <Parent1></Parent1>
    </>
    
  );
}

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
export default App;
