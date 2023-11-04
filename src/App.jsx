import "./App.css";
import { Grid } from "./Components/Grid";
import Example from "./Components/filter";

function App() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Grid />
        <Example />
      </div>
    </>
  );
}

export default App;
