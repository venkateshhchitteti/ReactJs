import React from 'react';
import ReactDOM from 'react-dom/client';


function addMinutes(date, minutes) {
    //we multiply minutes by 60000 is to convert minutes to milliseconds
    return new Date(date.getTime() + minutes * 60000);
  }
  
  function Clock() {
    const [time, setTime] = React.useState(new Date());
  
    const handleClick = () => {
      setTime(addMinutes(time, 10));
    };
  
    return (
      <div>
        <p>{time.toLocaleTimeString()}</p>
        <button onClick={handleClick}>+ 10 Minutes</button>
      </div>
    );
  }
  
// ReactDOM.createRoot(document.getElementById("root")).render(<Clock />);


export default Clock;
