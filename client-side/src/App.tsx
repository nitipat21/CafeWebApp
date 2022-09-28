import 'normalize.css';
import './App.scss';
import Layout from "./layouts/layout";
import { FC } from "react";
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import SignUpPage from './pages/signUpPage';
import { Route, Routes } from 'react-router-dom';

const App:FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout children={<HomePage/>}/>}/>
        <Route path='/login' element={<Layout children={<LoginPage/>}/>}/>
        <Route path='/signUp' element={<Layout children={<SignUpPage/>}/>}/>
        {/* handler not found page with redirect to home page */}
        <Route path='*' element={<Layout children={<HomePage/>}/>}/>
      </Routes>
    </div>
  );
}

export default App;
