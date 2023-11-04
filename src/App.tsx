import Header from './components/Header.jsx';
import MainGoal from './components/MainGoal.tsx';
import Counter from './components/Counter.jsx';
import './App.css';
import TabButton from './components/TabButton.tsx';

function App() {
  function handleSelect() {
    console.log('Clicked on');
  }
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
          <TabButton onSelect={handleSelect}>Components</TabButton>
          <TabButton onSelect={handleSelect}>JSX</TabButton>
          <TabButton onSelect={handleSelect}>Props</TabButton>
          <TabButton onSelect={handleSelect}>State</TabButton>
        </menu>
      </section>
    </>
  );
}

export default App;
