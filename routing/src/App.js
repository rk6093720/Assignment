// import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { AppContext} from "./Context/AppProvider";
import Login from './Context/Login';

export default   function App() {
  const [state] = useContext(AppContext);
  console.log(state);
  return (
    <div className="App">
     <h1> User Auth status : {state.isAuth ? "TRUE" :  "FALSE"}</h1>
     <h2>token:{state.token}</h2>
     <Login/>  
    </div>
  ); 
}

  
