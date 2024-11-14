import Button from './components/button';
import Card from './components/card';
import Heading1 from './components/heading';
import TextInput from './components/text-input';

function App() {

  return (
    <div className="container">
      <Heading1 value={"Todo list"} className="text-center" />
      <div className="d-flex gap-2">
        <TextInput />
        <Button label={"Add"} />
      </div>
      <div className="mt-4">
        <Card />
      </div>
    </div>
  );
}

export default App;
