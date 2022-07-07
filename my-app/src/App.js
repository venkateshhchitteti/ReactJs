import logo from './logo.svg';
import './App.css';
import OrderForm from './orderform';
import Calculator from './emicalculator';

function App() {//contructor function
  return (
    <div className="App">
      <OrderForm></OrderForm>
      <Calculator />
    </div>
  );
}

export default App;