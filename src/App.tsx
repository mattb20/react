import Header from './components/Header.jsx';
import MainGoal from './components/MainGoal.tsx';
import Counter from './components/Counter.jsx';
import './App.css';
import TabButton from './components/TabButton.tsx';
import { useState } from 'react';

type Section = 'components' | 'jsx' | 'props' | 'state';

const sectionDescriptions = {
  components: {
    details:
      'Components are really useful for compartmentalising your front end code and encouraging reusability.',
  },
  jsx: {
    details:
      'JSX is an extended language of JavaScript which enables you to inbed JavaScript attributes and functions into HTML code to create dynamic front ends.',
  },
  props: {
    details:
      'Props can be used as part of the customisable process of creating components.',
  },
  state: {
    details:
      'State is the internal snapshot of your component at any time, including all the functions that React defines on the functional component.',
  },
};

function App() {
  const [section, setSection] = useState('');
  function handleSelect(section: Section) {
    setSection(section);
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
            isSelected={section === 'components'}
            onSelect={() => handleSelect('components')}
            title={'Components'}
          />
          <TabButton
            isSelected={section === 'jsx'}
            onSelect={() => handleSelect('jsx')}
            title={'JSX'}
          />
          <TabButton
            isSelected={section === 'props'}
            onSelect={() => handleSelect('props')}
            title={'Props'}
          />
          <TabButton
            isSelected={section === 'state'}
            onSelect={() => handleSelect('state')}
            title={'State'}
          />
        </menu>
        {!section ? 'Please select a topic' : <div>{sectionDescriptions[section].details}</div>}
      </section>
    </>
  );
}

export default App;
