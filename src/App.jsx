import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Profile from './components/Profile'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/member/:slug" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App