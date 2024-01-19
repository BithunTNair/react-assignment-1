// import logo from './logo.svg';
import './App.css';
import Button from './NewComponents/Button.jsx';
import Password from './NewComponents/Password.jsx';
import Username from './NewComponents/Username.jsx';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Log In</h1>
        <Username/>
        <Password/>
        <Button/>
      </div>
    </div>
  );
}

export default App;
