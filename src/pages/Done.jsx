import Row from 'react-bootstrap/Row';
import { useState, useContext } from "react";
import React from "react";
import { Context } from '../components/public/Context';


const Done = () => { 
  const { todos, setTodos, dones, setDones } = useContext (Context);
  const [nouveauTache, setNouveauTache] = useState("");

  const handleClose2 = (id) => {
    const newDones = [...dones];
    const id2 = newDones[newDones.length-1].id+1;;
    const nom = newDones[id-1].nom;
    const color = newDones[id-1].color;
    console.log (color);
    const donesCopyUpdate = newDones.filter((dones) => dones.id !== id);
    setDones(donesCopyUpdate);

      const TachesCopy = [...todos];
      const tacheAAjouter = { id2, nom, color };
      TachesCopy.push(tacheAAjouter);
      setTodos(TachesCopy);
      nouveauTache("");        
  
  };

  
  return (
    <div>
      <Row className='card mt-2'>
        <h1 className='text-center'>Done</h1>
        <ul>
          {dones.map((done) => (
            <li key={done.id} className="text-decoration-line-through">
              {done.nom}    
            </li>
          ))}
        </ul>
      </Row>
    </div>
  );
}

export default Done;