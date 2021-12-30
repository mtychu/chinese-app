// NavBar at the top of most pages

import { Link } from 'react-router-dom';
import '../../index.css';

const NavigationBar = () => {
  return (
    <div>
      <h2>Navigation Bar</h2>
      <nav>
        <Link to='/home'>Home</Link> | <Link to='/todo'>To Do</Link>
      </nav>
    </div>
  );
};

export default NavigationBar;
