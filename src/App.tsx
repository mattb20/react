import Header from "./components/Header.jsx";
import MainGoal from "./components/MainGoal.tsx";
import Counter from "./components/Counter.jsx";
import "./App.css";
import Examples from "./components/Examples.tsx";

function App() {
  return (
    <>
      <Header title="Let's do some React"></Header>
      <div className="card">
        <Counter />
        <MainGoal />
      </div>
      <Examples />
    </>
  );
}

export default App;
