import 'normalize.css';
import './App.scss';
import Layout from "./layouts/layout";
import { FC } from "react";
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import SignUpPage from './pages/signUpPage';

const App:FC = () => {
  return (
    <div className="App">
      {/* <Layout children={<HomePage/>}/> */}
      {/* <Layout children={<LoginPage/>}/> */}
      <Layout children={<SignUpPage/>}/>
    </div>
  );
}

export default App;
