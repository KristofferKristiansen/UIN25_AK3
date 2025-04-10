import { useEffect, useState } from 'react'
import { client } from '../sanityClient'
import ProfileCard from './ProfileCard'
import LogEntries from './LogEntries'

function Home() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    client.fetch(`*[_type == "groupmembers"]{
      _id,
      name,
      email,
      "imageUrl": image.asset->url
    }`).then(data => setMembers(data))
  }, [])

  return (
    <div>
      <h2>Gruppemedlemmer</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {members.map(member => (
          <ProfileCard key={member._id} member={member} />
        ))}
      </div>
      <LogEntries />
    </div>
  )
}

export default Home