import Header from './components/Header.jsx';
import MainGoal from './components/MainGoal.tsx';
import Counter from './components/Counter.jsx';
import './App.css';

function App() {
  return (
    <>
      <Header title='Vite + React'></Header>
      <div className='card'>
        <Counter />
        <MainGoal />
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
