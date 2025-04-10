import { Link } from 'react-router-dom'

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Gruppe 5</h1>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Hjem</Link>
        <Link to="/member/frida-hoien" style={linkStyle}>Frida</Link>
        <Link to="/member/kristoffer-kristiansen" style={linkStyle}>Kristoffer</Link>
        <Link to="/member/kiur-reiser" style={linkStyle}>Kiur</Link>
        <Link to="/member/kevin-vu" style={linkStyle}>Kevin</Link>
      </nav>
    </header>
  )
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  background: '#def2fc'
}

const navStyle = {
  display: 'flex',
  gap: '1.5rem'
}

const linkStyle = {
  textDecoration: 'none',
  color: 'black',
  fontWeight: 'bold'
}

export default Header
