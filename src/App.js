import React from 'react';
import Main from './components/layouts/main'
import {useSelector,useDispatch} from 'react-redux'
import Login from './components/login'
function App() {
  const isLogin = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return <Main />
}

export default App;
