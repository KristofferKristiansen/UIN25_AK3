import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { client } from "../sanityClient"

function Profile() {
  const { id } = useParams()
  const [member, setMember] = useState(null)

  useEffect(() => {
    client.fetch(`*[_type == "groupMember" && _id == "${id}"][0]{
      name,
      email,
      "imageUrl": image.asset->url,
      bio,
      interests,
      logEntries
    }`).then(data => setMember(data))
  }, [id])

  if (!member) return <div>Laster...</div>

  return (
    <div>
      <h2>{member.name}</h2>
      <img src={member.imageUrl} alt={member.name} style={{ width: '200px' }} />
      <p>{member.email}</p>
      <h3>Biografi</h3>
      <p>{member.bio}</p>
      <h3>Interesser</h3>
      <ul>
        {member.interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
      <h3>Loggføringer</h3>
      <ul>
        {member.logEntries.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  )
}

export default Profile
