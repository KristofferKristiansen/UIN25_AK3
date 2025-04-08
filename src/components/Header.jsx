import { Link } from 'react-router-dom'

function Header() {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#eee' }}>
      <h1>Gruppe 5</h1>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/">Hjem</Link>
        <Link to="/member/ID1">Anna</Link>
        <Link to="/member/ID2">Jonas</Link>
        <Link to="/member/ID3">Sara</Link>
        {/* Disse ID-ene må byttes med faktiske sanity-id-er etter hvert */}
      </nav>
    </header>
  )
}

export default Header
