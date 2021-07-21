import './MainDisplay.scss';
import { Redirect, Route, Switch } from 'react-router-dom';

const MainDisplay = () => {
  return (
    <div className='main-display'>
      <Switch>
        <Route exact path='/'>
          <div className='welcome-message animation'>Welcome to BeeBook</div>
        </Route>

        <Route path='/posts'>
          posts
          {/* inserir aqui componente react */}
        </Route>
        <Route path='/gallery'>gallery</Route>
        <Route path='/todos'>todos</Route>
        <Route render={() => <Redirect to='/' />} />
      </Switch>
    </div>
  );
};

export default MainDisplay;
