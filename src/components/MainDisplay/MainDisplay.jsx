import './MainDisplay.scss';
import { Redirect, Route, Switch } from 'react-router-dom';
import Posts from '../Posts/Posts';
import Photos from '../Photos/Photos';
import Todos from '../Todos/Todos.jsx';

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
        <Route path='/gallery'>
          <Photos />
        </Route>
        <Route path='/todos'>
          <Todos />
        </Route>
        <Route render={() => <Redirect to='/' />} />
      </Switch>
    </div>
  );
};

export default MainDisplay;
