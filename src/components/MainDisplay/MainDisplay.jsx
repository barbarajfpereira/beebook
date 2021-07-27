import './MainDisplay.scss';
import { Redirect, Route, Switch } from 'react-router-dom';
import Posts from '../Posts/Posts';

const MainDisplay = () => {
  return (
    <div className='main-display'>
      <Switch>
        <Route exact path='/'>
          <div className='home'>
            <span className='welcome-message animation'>
              Welcome to BeeBook
            </span>
          </div>
        </Route>

        <Route path='/posts'>
          <Posts />
        </Route>
        <Route path='/gallery'>gallery</Route>
        <Route path='/todos'>todos</Route>
        <Route render={() => <Redirect to='/' />} />
      </Switch>
    </div>
  );
};

export default MainDisplay;
