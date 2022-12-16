import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState, useContext } from "react";
import React from "react";
import { Context } from '../components/public/Context';

let timeoutID
const Todo = () => { 
  // state (etat, données)
  const { todos, setTodos, dones, setDones } = useContext (Context);


  const [nouveauTache, setNouveauTache] = useState("");
  const [nouveauDone, setNouveauDone] = useState("");

  // comportement
  const handleDelete = (id) => {
    //alert(id);
    // copie state
      const tachesCopy = [...todos];
      // manipuler mon state
      const tachesCopyUpdate = tachesCopy.filter((todos) => todos.id !== id);
      // modifier mon state avec le seter
      setTodos(tachesCopyUpdate);
  };
  


  const handleDone = (id) => {
    const newTache = [...todos];
    newTache[id-1].color = 'Red';
    setTodos(newTache);

    timeoutID = setTimeout(() => {
      const id2 = newTache[id-1].id;
      const nom = newTache[id-1].nom;
      const color = newTache[id-1].color;

      console.log(id2)
      const tachesCopyUpdate = newTache.filter((tache) => tache.id !== id);
      const DonesCopy = [...dones];
      const doneAAjouter = { id2, nom, color };
      console.log(doneAAjouter)
      DonesCopy.push(doneAAjouter);
      setDones(DonesCopy);
      setTodos(tachesCopyUpdate);
      setNouveauDone("");        
  }, 10000);  
  };

  const handleClose = (id) => {
    const newTache = [...todos];
    newTache[id-1].color = '';
    setTodos(newTache);
    clearTimeout(timeoutID); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //
    //1.copie state

    const tachesCopy = [...todos];

    //2.Manipuler sate

    const id = tachesCopy[tachesCopy.length-1].id+1;
    const nom = nouveauTache;
    const color = "";
    const tacheAAjouter = { id, nom, color };
    tachesCopy.push(tacheAAjouter);

    //3.Modifier state
    setTodos(tachesCopy);
    setNouveauTache("");
  };

  const handleChange = (event) => {
    setNouveauTache(event.target.value);
  };
  
  // affichage (render)
  return (
    <div>

      <Row className='card mt-2 mb-2'>
        <h1 className='text-center'>To do</h1>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} >
              {todo.nom}        
                <Button onClick={() => handleDelete(todo.id)} type="button" className='btn btn-danger mb-2 mx-1'> Delete </Button>
                <Button style={{ backgroundColor: todo.color }} onClick={() => handleDone(todo.id)} type="button" className=' mb-2 mx-1'> Done </Button>
                <Button style={{ backgroundColor: "Green" }} onClick={() => handleClose(todo.id)} type="button" className=' mb-2 mx-1'> Cancel Done </Button>
            </li>
          ))}
        </ul>
      </Row>

      <Row>
        <form action="submit" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter to do" value={nouveauTache} onChange={handleChange} />
            <Form.Text className="text-muted" > </Form.Text>
          </Form.Group>
          <Button type='submit'> ajouter </Button>        
        </form>
      </Row>

    </div>
  );
}

export default Todo;