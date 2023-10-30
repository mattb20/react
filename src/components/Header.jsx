import reactLogo from '../assets/react.svg';
import viteLogo from '../../public/vite.svg';

export default function Header(props) {
  return (
    <div>
      <header>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
    </header>
    <h1>{ props.title }</h1>
    </div>
  );
}