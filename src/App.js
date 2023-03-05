import Counter from './components/Counter';
import {useSelector} from 'react-redux';
import Auth from './components/Auth';
import Header from './components/Header';
import { Fragment } from 'react';


function App() {
  const auth = useSelector(state=>state.auth.authentication)
  return (<Fragment>
  <Header />
  {!auth && <Auth />}
    <Counter />
    </Fragment>
  );
}

export default App;
