import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { useState } from "react";
import React from "react";

const TDone = () => { 
    // state (etat, données)
    const [Dones, setDones] = useState([
        { id: 1, nom: "Eat", color: ""},
    ]);

  return (
    <div>
     <Row>
        <h1 className='text-center'>To do</h1>
        <ul>
          {Dones.map((Done) => (
            <li key={Done.id}>
              {Done.nom}        
                <Button type="button" className=' mb-2 mx-1'> Done </Button>
            </li>
          ))}
        </ul>
      </Row>
    </div>
  );
}

export default TDone;