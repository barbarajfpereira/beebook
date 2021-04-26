import './Topbar.scss';
import logo from '../assets/topbar-logo.png';

const Topbar = () => {
  return (
    <div className='topbar'>
      <img src={logo} className='logo' alt='logo' />
      <span className='title'>BOOK</span>
    </div>
  );
};

export default Topbar;
