import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './Components/Navbar'
import Cover from './Components/Cover'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Cover />
  </React.StrictMode>,
)
