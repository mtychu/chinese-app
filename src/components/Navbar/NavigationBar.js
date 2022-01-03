// NavBar at the top of most pages

import { Link } from 'react-router-dom';
import '../../index.css';

const NavigationBar = (props) => {
  return (
    <div className='bar'>
      <h3>{props.title}</h3>
      <nav>
        <Link to='/home'>Home</Link> | <Link to='/todo'>To Do</Link> |{' '}
        <Link to='/upload-page'>Upload</Link>
      </nav>
    </div>
  );
};

export default NavigationBar;
