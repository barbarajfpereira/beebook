import './App.scss';
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className='app'>
      <Topbar />
      <div className='main-page'>
        <Sidebar />
        <div>Welcome to BeeBook</div>
      </div>
    </div>
  );
}

export default App;
