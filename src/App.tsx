import Header from './components/Header.jsx';
import MainGoal from './components/MainGoal.tsx';
import Counter from './components/Counter.jsx';
import './App.css';
import TabButton from './components/TabButton.tsx';

function App() {
  return (
    <>
      <Header title='Vite + React'></Header>
      <div className='card'>
        <Counter  />
        <MainGoal />
      </div>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton>Components</TabButton>
          <TabButton>JSX</TabButton>
          <TabButton>Props</TabButton>
          <TabButton>State</TabButton>
        </menu>
      </section>
    </>
  );
}

export default App;
