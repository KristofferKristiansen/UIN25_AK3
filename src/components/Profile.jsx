import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { client } from "../sanityClient"
import { format } from 'date-fns'

function Profile() {
  const { slug } = useParams()
  const [member, setMember] = useState(null)
  const [logg, setLogg] = useState([])

  useEffect(() => {
    // 1. Hent gruppemedlem basert på slug
    client.fetch(`*[_type == "groupmembers" && slug.current == $slug][0]{
      name,
      email,
      "imageUrl": image.asset->url,
      bio,
      interests
    }`, { slug }).then(setMember)

    // 2. Hent arbeidslogg basert på navnet
    client.fetch(`*[_type == "arbeidslogg" && navn == $name] | order(dato desc){
      _id,
      dato,
      beskrivelse
    }`, { name: slugToName(slug) }) // kan fjernes når arbeidslogg kobles direkte
    .then(setLogg)
  }, [slug])

  if (!member) return <div>Laster...</div>

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <div>
          <img
            src={member.imageUrl}
            alt={member.name}
            style={{ width: '300px', height: '300px', objectFit: 'cover', background: '#ccc' }}
          />
        </div>
        <div>
          <h2>{member.name}</h2>
          <p>{member.bio}</p>
          <h3>Interesser</h3>
          <ul>
            {member.interests?.map((interest, i) => (
              <li key={i}>{interest}</li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h3>Arbeidslogg</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#eee' }}>
              <th style={cell}>Dato</th>
              <th style={cell}>Hva ble gjort?</th>
            </tr>
          </thead>
          <tbody>
            {logg.map(entry => (
              <tr key={entry._id}>
                <td style={cell}>{format(new Date(entry.dato), 'yyyy-MM-dd')}</td>
                <td style={cell}>{entry.beskrivelse}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const cell = {
  border: '1px solid #ccc',
  padding: '0.75rem',
  textAlign: 'left'
}

// Midlertidig mapping (til arbeidsloggen får referansefelt til person)
function slugToName(slug) {
  const map = {
    "hans-hansen": "Hans Hansen",
    "trine-tjensvold": "Trine Tjensvold",
    "jostein-jensen": "Jostein Jensen",
    "ann-sofi-berg": "Ann-Sofi Berg"
  }
  return map[slug] || ""
}

export default Profile
