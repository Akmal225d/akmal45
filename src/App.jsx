import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'
import SinglePage from './pages/SinglePage'
import CategoryPage from './pages/Categorypage'


const App = () => {
  return (
   <>
   <Header/>
   
<Routes>
<Route path='/category' element={<CategoryPage/>} />
<Route path='/' element={<Home/>} />
<Route path='/product/:id' element={<SinglePage/>}/>
</Routes>
   
   </>
  )
}

export default App
