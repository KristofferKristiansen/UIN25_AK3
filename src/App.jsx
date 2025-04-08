import { Routes, Route } from 'react-router-dom'
import Home from './compontents/Home'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/member/:id" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App