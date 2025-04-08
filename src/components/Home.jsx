import { useEffect, useState } from 'react'
import { client } from '../sanityClient'
import ProfileCard from './ProfileCard'

function Home() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    client.fetch(`*[_type == "groupMember"]{
      _id,
      name,
      email,
      "imageUrl": image.asset->url
    }`).then(data => setMembers(data))
  }, [])

  return (
    <div>
      <h2>Forside</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {members.map(member => (
          <ProfileCard key={member._id} member={member} />
        ))}
      </div>
    </div>
  )
}

export default Home
