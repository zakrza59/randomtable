import React from 'react';
import './Table.css'

const Table = (props) => {
  const { persons, page } = props;

  function uppercase(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="Table-container">
        <table className="Table" align="center">
          <thead className="Table-head">
            <tr>
              <th>#</th>
              <th>Imię</th>
              <th>Nazwisko</th>
              <th>Nr tel.</th>
              <th>Zdjęcie</th>
            </tr>
          </thead>
          <tbody className="Table-body">
            {persons.map((person, index) => (
            <tr key={index+1}>
              <td>{10*page+index-9}</td>
              <td>{uppercase(person.name.first)}</td>
              <td>{uppercase(person.name.last)}</td>
              <td>{person.phone}</td>
              <td><img src={person.picture.thumbnail} alt={index+1}/></td>
            </tr>
            ))}
          </tbody>
        </table>  
      </div>
  )
}

export default Table;