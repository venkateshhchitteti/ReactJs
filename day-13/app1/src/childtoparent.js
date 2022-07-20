import React from 'react';
import ReactDOM from 'react-dom/client';
function App() {
    return <Parent1 />;
  }
  
  function Parent1() {
    const handleRequest = (request) => {
      if (request.includes("car")) {
        alert("No");
      }
    };
  
    return (
      <div>
        <h1>Parent</h1>
        <Child onRequest={handleRequest} />
      </div>
    );
  }
  function Child(props) {
    const handleClick = () => {
      props.onRequest("Can I have the car?");
    };
  
    return (
      <div>
        <h2>Child</h2>
        <button onClick={handleClick}>Ask for the car</button>
      </div>
    );
  }
  
//   ReactDOM.createRoot(document.getElementById("root")).render(<App />);
export default Parent1;