import cx from 'classnames'
// always import libs from node modules first or exports from lib
import { Routes, Route } from 'react-router-dom'
// THEN import your components
import ButtonPage from './pages/ButtonPage'
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage'
import Navbar from './components/Navbar'
import TodoPage from './pages/TodoPage'

// then your css and/or datafiles
import './index.css'

const App = () => {
  return (
    <div className = "container mx-auto grid grid-cols-3 gap-4 mt-4">
    <div>
      <div>
        <Navbar />
      </div>
      <div className = "col-span-5 relative ">
        <Routes>
          <Route path = "/" element = { <ButtonPage/>} />
          <Route path = "/accordion" element = { <AccordionPage/>} />
          <Route path = "/dropdown" element = { <DropdownPage />} />
          <Route path = "/todo" element = { <TodoPage />} />
        </Routes>
      </div>
    </div>
    </div>
    )
}

export default App
