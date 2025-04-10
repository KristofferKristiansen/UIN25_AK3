function ProfileCard({ member }) {
  return (
    <div style={card}>
      <img src={member.imageUrl} alt={member.name} style={image} />
      <div style={info}>
        <h3 style={{ margin: '0 0 0.5rem' }}>{member.name}</h3>
        <p style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>{member.email}</p>
        <p>Se profil..</p>
      </div>
    </div>
  )
}

const card = {
  width: '250px',
  border: '1px solid #ddd',
  borderRadius: '10px',
  overflow: 'hidden',
  background: '#fff',
  boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
  transition: 'transform 0.2s ease',
  cursor: 'pointer',
}

const image = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  backgroundColor: '#eee',
}

const info = {
  padding: '1rem',
}

export default ProfileCard
