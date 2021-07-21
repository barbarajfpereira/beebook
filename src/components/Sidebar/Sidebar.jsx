import './Sidebar.scss';
import { Link, useLocation } from 'react-router-dom';

const tabs = ['posts', 'gallery', 'todos'];

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');

  return (
    <ul className='sidebar'>
      {tabs.map((tab) => (
        <li className={splitLocation[1] === `${tab}` ? 'active' : ''}>
          <Link to={`/${tab}`}>{tab}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
