import './App.css';
import Todo from "./pages/Todo";
import Done from "./pages/Done";
import Error from './pages/Error';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState} from 'react';
import { Context } from './components/public/Context';

function App() {

  const [todos, setTodos] = useState([
    { id: 1, nom: "Learn", color: ""},
    { id: 2, nom: "Sleep", color: ""},
    { id: 3, nom: "Sleep", color: ""}
  ]);

  const [dones, setDones] = useState([
    { id: 1, nom: "Eat", color: ""},
  ]);


  return (
    <div className="App">
    <Context.Provider value = {{ todos, setTodos, dones, setDones }}> 

       <BrowserRouter>
        <Routes>
         <Route element={<Layout />}> 
           <Route index element={<Todo />} /> 
           <Route path="/Done" element={<Done />} />
           <Route path="*" element={<Error />} />         
         </Route>
        </Routes>
       </BrowserRouter>

    </Context.Provider>   
    </div>
  );
}

export default App;
