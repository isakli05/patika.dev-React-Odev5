
import './App.css';
import Button from './components/Button';
function App() {
  return (
    <div className="App">
      <Button type={"dashed"}></Button>
      <Button type={"text"}></Button>
      <Button type={"link"}></Button>
      <Button type={"primary"}></Button>
      <Button type={"default"}></Button>
    </div>
  );
}

export default App;
