import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { client } from "../sanityClient"
import { format } from 'date-fns'

function Profile() {
  const { slug } = useParams()
  const [member, setMember] = useState(null)
  const [logg, setLogg] = useState([])

  useEffect(() => {
    console.log("Slug fra URL:", slug)

    // 1. Hent medlem basert på slug
    client.fetch(
      `*[_type == "groupmembers" && slug.current == $slug][0]{
        name,
        "imageUrl": image.asset->url,
        bio,
        interests
      }`,
      { slug }
    ).then(data => {
      console.log("Medlem hentet fra Sanity:", data)
      setMember(data)

      // 2. Hent arbeidslogg for dette medlemmet basert på navn
      if (data?.name) {
        client.fetch(
          `*[_type == "arbeidslogg" && navn == $name] | order(dato desc){
            _id,
            dato,
            beskrivelse
          }`,
          { name: data.name }
        ).then(loggData => {
          console.log("Arbeidslogg hentet:", loggData)
          setLogg(loggData)
        }).catch(err => {
          console.error("Feil ved henting av arbeidslogg:", err)
        })
      }
    }).catch(err => {
      console.error("Feil ved henting av medlem:", err)
    })
  }, [slug])

  if (!member) return <div>Laster profil...</div>

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <img
          src={member.imageUrl}
          alt={member.name}
          style={{ width: '300px', height: '300px', objectFit: 'cover', background: '#ccc' }}
        />
        <div>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
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
        {logg.length > 0 ? (
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
        ) : (
          <p>Ingen loggføringer funnet for dette medlemmet.</p>
        )}
      </div>
    </div>
  )
}

const cell = {
  border: '1px solid #ccc',
  padding: '0.75rem',
  textAlign: 'left'
}

export default Profile
