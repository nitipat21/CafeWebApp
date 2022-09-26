import 'normalize.css';
import './App.scss';
import Layout from "./layouts/layout";
import { FC } from "react";
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';

const App:FC = () => {
  return (
    <div className="App">
      <Layout children={<LoginPage/>}/>
    </div>
  );
}

export default App;
