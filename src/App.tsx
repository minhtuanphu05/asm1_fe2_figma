import React from 'react';
import './App.css'
import Client from './layout/Client';
import Home from './compoment/Home';
import Add from './pages/Add';
import About from './pages/About';
import Contact from './pages/Contact';
import Edit from './pages/Edit';
import Detail from './pages/Detail';
import Register from './pages/Register';
import Login from './pages/Login';
import { useRoutes } from 'react-router-dom';
import Adminlayout from './layout/admin/adminlayout';
const conFig =[
  {
    path:"",
    element:<Client/>,
    children:[
      {path:"",element:<Home/>},
      {path:"add",element:<Add/>},
      {path:"about",element:<About/>},
      {path:"contact",element:<Contact/>},
      {path:"update/:id",element:<Edit/>},
      {path:"detail/:id",element:<Detail/>},
      {path:"register",element:<Register/>},
      {path:"login",element:<Login/>},
    ]
  },
  {
    path:"admin",
    element:<Adminlayout/>,
    children:[
      {path:"",element:<Home/>},
      {path:"add",element:<Add/>},
      {path:"about",element:<About/>},
      {path:"contact",element:<Contact/>},
      {path:"update/:id",element:<Edit/>},
      {path:"detail/:id",element:<Detail/>},
      {path:"register",element:<Register/>},
      {path:"login",element:<Login/>},
    ]
  },
]
function App() {
  const rouTes = useRoutes(conFig)
  return ( 
      <>
      {rouTes}     
      </>
  )
      
}

export default App
