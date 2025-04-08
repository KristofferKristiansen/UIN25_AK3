import { Link } from 'react-router-dom'

function ProfileCard({ member }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', width: '200px' }}>
      <img src={member.imageUrl} alt={member.name} style={{ width: '100%' }} />
      <h3>{member.name}</h3>
      <p>{member.email}</p>
      <Link to={`/member/${member._id}`}>Se profil</Link>
    </div>
  )
}

export default ProfileCard
