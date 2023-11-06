import Header from './components/Header.jsx';
import MainGoal from './components/MainGoal.tsx';
import Counter from './components/Counter.jsx';
import './App.css';
import TabButton from './components/TabButton.tsx';
import { useState } from 'react';

type Section = 'components' | 'jsx' | 'props' | 'state';

function App() {
  const [section, setSection] = useState('');
  function handleSelect(section: Section) {
    if (section === 'components') {
      setSection('Components are really useful for compartmentalising your front end code and encouraging reusability.');
    }
    if (section === 'jsx') {
        setSection('JSX is a useful extension of JavaScript that allows you to pair HTML elements with executable JavaScript code.');
    }
    if (section === 'props') {
        setSection('Props can be used as part of the customisable process of creating components.');
    }
    if (section === 'state') {
        setSection('State is the internal snapshot of your component at any time, including all the functions that React defines on the functional component.');
    }
  }
  return (
    <>
      <Header title='Vite + React'></Header>
      <div className='card'>
        <Counter />
        <MainGoal />
      </div>
      <section id='examples'>
        <h2>Examples</h2>
        <menu>
          <TabButton
            onSelect={() => handleSelect('components')}
            title={'Components'}
          />
          <TabButton onSelect={() => handleSelect('jsx')} title={'JSX'} />
          <TabButton onSelect={() => handleSelect('props')} title={'Props'} />
          <TabButton onSelect={() => handleSelect('state')} title={'State'} />
        </menu>
        {section}
      </section>
    </>
  );
}

export default App;
