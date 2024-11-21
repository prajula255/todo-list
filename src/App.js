import { useState } from 'react';
import Button from './components/button';
import Card from './components/card';
import Heading1 from './components/heading';
import TextInput from './components/text-input';

function App() {
  const [todo, setTodo] = useState([])
  const [input, setInput] = useState("")

  function handleAdd() {
    setTodo([...todo, input])
    setInput("")
  }

  function handleDelete(index) {
    const newArray = todo.filter((_, i) => i !== index)
    setTodo(newArray)
  }
  return (
    <div className="container">
      <Heading1 value={"Todo list"} className="text-center" />
      <div className="d-flex gap-2">
        <TextInput value={input} onChange={(e) => setInput(e.target.value)} />
        <Button label={"Add"} onClick={handleAdd} />
      </div>
      <div className="mt-4 grid row ">
        {
          todo.length > 0 ?
            todo.map((item, index) => (
              <div className="col-2 p-2" >
                <Card key={index} todo={item} onDelete={() => handleDelete(index)} />
              </div>
            )) :
            (
              <div>
                <p>nothing to show</p>
              </div>
            )
        }

      </div>
    </div>
  );
}

export default App;
