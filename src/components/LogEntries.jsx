import { useEffect, useState } from 'react';
import { client } from '../sanityClient';
import { Link } from 'react-router-dom';

export default function Worklog() {
  const [logg, setLogg] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLogg = async () => {
      try {
        const data = await client.fetch(`*[_type == "worklog"] | order(date desc){
          _id,
          date,
          task,
          hours,
          member->{
            name,
            "slug": slug.current,
            "imageUrl": image.asset->url
          }
        }`);
        setLogg(data);
      } catch (err) {
        console.error(err);
        setError('Kunne ikke hente arbeidsloggen.');
      }
    };
    fetchLogg();
  }, []);

  return (
    <section>
      <h2>Arbeidslogg</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Dato</th>
            <th>Navn</th>
            <th>Oppgave</th>
            <th>Timer</th>
          </tr>
        </thead>
        <tbody>
          {logg.map(entry => (
            <tr key={entry._id}>
              <td>{format(new Date(entry.date), 'yyyy-MM-dd')}</td>
              <td>
                {entry.member?.imageUrl && (
                  <img
                    src={entry.member.imageUrl}
                    alt={entry.member.name}
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      marginRight: '8px',
                      verticalAlign: 'middle',
                    }}
                  />
                )}
                {entry.member?.slug ? (
                  <Link to={`/profil/${entry.member.slug}`} style={{ verticalAlign: 'middle' }}>
                    {entry.member.name}
                  </Link>
                ) : (
                  entry.member?.name || 'Ukjent'
                )}
              </td>
              <td>{entry.task}</td>
              <td>{entry.hours} timer</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
