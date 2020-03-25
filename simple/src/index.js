import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



const Header = ()=> {
     return <h2> hello </h2>
}


const Field = ()=> {
  return <input type = 'name' placeholder = 'type here' />
}

const Btn = ()=> {
  const text = 'log in';
  return  <button> {text} </button>
}

const Apps = ()=> {
  return (
    <div>

    <Header />
    <Field />
    <Btn />

    </div>
  )
}





ReactDOM.render(<Apps /> , document.getElementById('root'));