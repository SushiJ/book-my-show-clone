import home from "./components/Home";
import HOC from "./HOC";

function App() {
  return (
    <>
      <HOC path="/" exact component={home} />
    </>
  );
}

export default App;
