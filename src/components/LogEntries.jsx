import { useEffect, useState } from "react";
import { client } from "../sanityClient";
import { format } from "date-fns"; 

export default function LogEntries() {
  const [logg, setLogg] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`*[_type == "arbeidslogg"] | order(dato desc){
        _id,
        dato,
        navn,
        beskrivelse
      }`);
      setLogg(data);
    };

    fetchData();
  }, []);

  return (
    <section>
      <h2>Arbeidslogg</h2>
      <table>
        <thead>
          <tr>
            <th>Dato</th>
            <th>Navn</th>
            <th>Hva ble gjort?</th>
          </tr>
        </thead>
        <tbody>
          {logg.map((entry) => (
            <tr key={entry._id}>
              <td>{format(new Date(entry.dato), "dd.MM.yyyy")}</td>
              <td>{entry.navn}</td>
              <td>{entry.beskrivelse}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}