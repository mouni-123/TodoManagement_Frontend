import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListTodoComponent from './components/ListTodoComponent.jsx'
import HeaderComponent from './components/HeaderComponent.jsx'
import FooterComponent from './components/FooterComponent.jsx'
import TodoComponent from './components/TodoComponent.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
      <Route path='/' element={<ListTodoComponent/>}></Route>
      <Route path='/todo' element={<ListTodoComponent/>}></Route>
      <Route path ='/add-todo'element={<TodoComponent/>}></Route>
      <Route path='/update-todo/:id' element={<TodoComponent/>}></Route>
    </Routes>
   
    <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
