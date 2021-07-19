import './MainDisplay.scss';
import { Route, Switch } from 'react-router-dom';

const tabs = ['posts', 'gallery', 'todos'];

const MainDisplay = () => {
  return (
    <div className='main-display'>
      <Switch>
        <Route exact path='/'>
          <div className='welcome-message animation'>Welcome to BeeBook</div>
        </Route>
        {tabs.map((tab, i) => (
          <Route key={i} path={`/${tab}`}>
            {tab}
            {/* inserir aqui componente react */}
          </Route>
        ))}
        ;
      </Switch>
    </div>
  );
};

export default MainDisplay;
