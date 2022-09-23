import 'normalize.css';
import './App.scss';
import Layout from "./layouts/layout";
import { FC } from "react";
import HomePage from './pages/homePage';

const App:FC = () => {
  return (
    <div className="App">
      <Layout children={<HomePage/>}/>
    </div>
  );
}

export default App;
