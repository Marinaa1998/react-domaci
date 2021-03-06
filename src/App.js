
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Igra from './components/Igra';
import Kreiraj from './components/Kreiraj';
import Navbar from './components/Navbar';
function App() {
  const [reci, setreci] = useState([])

  const kreiraj = (rec) => {
    setreci(prev => {
      return [...prev, rec]
    })
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>


        <Route path='/kreiraj'>
          <Kreiraj kreiraj={kreiraj} />
        </Route>
        <Route path='/'>

          <Igra reci={reci} />
        </Route>
      </Switch>


    </BrowserRouter>
  );
}

export default App;
