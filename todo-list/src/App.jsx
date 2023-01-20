import './App.css'
import { Routes, Route } from 'react-router-dom'

import CalendarView from './pages/Calendar/Calendar'
import ToDo from './pages/ToDo/ToDo'
import Navbar from './components/Navbar/Navbar'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<CalendarView></CalendarView>}/>
        <Route path='/todo/:id' element={<ToDo></ToDo>}/>
      </Routes>
    </div>
  )
}

export default App
