import './Topbar.scss';
import logo from '../../assets/topbar-logo.png';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className='topbar'>
      <img src={logo} className='logo' alt='logo' />
      <span className='name'>
        <Link to='/'>BOOK</Link>
      </span>
    </div>
  );
};

export default Topbar;
