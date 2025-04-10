import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Profile from './components/Profile'
import LogEntries from './components/LogEntries'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/member/:id" element={<Profile />} />
        <Route path='/member/:id' element={<LogEntries />} />
      </Routes>
    </>
  )
}

export default App