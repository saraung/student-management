import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import StudentView from './components/StudentView'
import CourseList from './components/CourseList'
import EditStudent from './components/EditStudent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar></Navbar>
     <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<StudentView/>}/>
      <Route path='/course' element={<CourseList/>}/>
      <Route path='/editstudent' element={<EditStudent/>}/>
     </Routes>
    </>
  )
}

export default App
