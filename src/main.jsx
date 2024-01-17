import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Minions from './Minion/ListMinion.jsx'
import Minion from './Minion/ViewMinion.jsx'
import Add from './Minion/Add.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<Minion />*/}
    <Minions />
    <Add />
  </React.StrictMode>,
)