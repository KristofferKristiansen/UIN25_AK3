import { Link } from 'react-router-dom'

export default function Header({children}) {
  return (
    <>
    <header style={{ padding: '1rem', backgroundColor: '#eee' }}>
      <h1>Gruppe 5</h1>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/">Hjem</Link>
        <Link to="/member/ID1">Frida</Link>
        <Link to="/member/ID2">Kristoffer</Link>
        <Link to="/member/ID3">Kiur</Link>
        <Link to="/member/ID4">Kevin</Link>
        {/* Disse ID-ene må byttes med faktiske sanity-id-er etter hvert */}
      </nav>
    </header>
    <main>{children}</main>
    </>
  )
}