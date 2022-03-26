import { Fragment } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Home from './page/Home';

function App() {
  return (
    <Fragment>
      <Navbar /> 
      <main className="main_container m-auto" >
        <Home />
      </main>
    </Fragment>
    
  );
}

export default App;
