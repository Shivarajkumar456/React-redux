import { authAction } from '../store/index';
import {useSelector, useDispatch} from 'react-redux';
import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state=> state.auth.authentication);
  const logoutHandler = () => {
    dispatch(authAction.logout());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {auth && (<nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>)}
    </header>
  );
};

export default Header;
