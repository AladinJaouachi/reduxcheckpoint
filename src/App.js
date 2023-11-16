import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import Filtertodo from './components/Filtertodo';
import { useState } from 'react';
function App() {
  const [filtertodo, setfiltertodo] = useState("")
  return <div className="App">


    <AddTask/>
    <Filtertodo setfiltertodo={setfiltertodo}/>
   <ListTask filtertodo={filtertodo}/>
  </div>;
}

export default App;
