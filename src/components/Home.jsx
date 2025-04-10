import { useEffect, useState } from 'react'
import { client } from '../sanityClient'
import ProfileCard from './ProfileCard'
import LogEntries from './LogEntries'
import { Link } from 'react-router-dom'

function Home() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    client.fetch(`*[_type == "groupmembers"]{
      _id,
      name,
      email,
      "imageUrl": image.asset->url,
      "slug": slug.current
    }`).then(data => setMembers(data))
  }, [])

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>Gruppemedlemmer</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
        {members.map(member => (
          <Link
            key={member._id}
            to={`/member/${member.slug}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <ProfileCard member={member} />
          </Link>
        ))}
      </div>

      <div style={{ marginTop: '3rem' }}>
        <LogEntries />
      </div>
    </div>
  )
}

export default Home
