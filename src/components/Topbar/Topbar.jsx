import './Topbar.scss';
import logo from '../../assets/topbar-logo.png';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className='topbar'>
      <Link to='/'>
        <img src={logo} className='logo' alt='logo' />
        <span className='name'>BOOK</span>
      </Link>
    </div>
  );
};

export default Topbar;
