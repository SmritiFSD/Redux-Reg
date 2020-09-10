import React from 'react';
import './styles/App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import UserForm from './components/UserForm.js';
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <UserForm/>
    </div>
    </Provider>
    
  );
}

export default App;
