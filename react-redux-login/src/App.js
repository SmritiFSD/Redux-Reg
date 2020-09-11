import React from 'react';
import './styles/App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import UserForm from './components/UserForm.js';
import UserLogin from './components/UserLogin.js';
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <UserForm/>
      <UserLogin/>
    </div>
    </Provider>
    
  );
}

export default App;
