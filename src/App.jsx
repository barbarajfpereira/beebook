import './App.scss';
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import MainDisplay from './components/MainDisplay/MainDisplay';

function App() {
  return (
    <div className='app'>
      <Topbar />
      <div className='main-section'>
        <Sidebar />
        <MainDisplay />
      </div>
    </div>
  );
}

export default App;
