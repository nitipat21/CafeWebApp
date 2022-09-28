import 'normalize.css';
import './App.scss';
import Layout from "./layouts/layout";
import { FC } from "react";
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import SignUpPage from './pages/signUpPage';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const App:FC = () => {

  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Layout children={<HomePage/>}/>}/>
          <Route path='/login' element={<Layout children={<LoginPage/>}/>}/>
          <Route path='/signUp' element={<Layout children={<SignUpPage/>}/>}/>
          {/* handler not found page with redirect to home page */}
          <Route path='*' element={<Layout children={<HomePage/>}/>}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
