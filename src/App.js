import React,{useEffect,useContext} from 'react';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Signup from './Pages/Signup'
import './App.css';
import { AuthContext, FirebaseContext } from './store/Context';
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import Post from './store/PostContext'
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
//import { AuthContext } from './store/Context';

function App() {
  const {setUser} =useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
      firebase.auth().onAuthStateChanged((user)=>{
        setUser(user)
      })
  })
  return (
    <div>
      <Post>
<Router>
  <Routes>
  <Route element={<Home/>} path='/'>
      
  </Route>
  <Route element={<Signup/>} path='/signup'>
      
  </Route>
  <Route element={<Login/>} path='/login'>
      
      </Route>
      <Route element={<Create/>} path='/create'>
      
      </Route>
      <Route element={<View/>} path='/view'>
      
      </Route>
  </Routes>
</Router>
</Post>
    </div>
  );
}

export default App;
