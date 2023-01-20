import './App.css'
import {Routes, Route} from 'react-router-dom'

import CalendarView from './pages/Calendar'
import ToDo from './pages/ToDo'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<CalendarView></CalendarView>}/>
        <Route path='/todo' element={<ToDo></ToDo>}/>
      </Routes>
    </div>
  )
}

export default App
