import 'normalize.css';
import './App.scss';
import Layout from "./layouts/layout";
import { FC } from "react";

const App:FC = () => {
  return (
    <div className="App">
      <Layout/>
    </div>
  );
}

export default App;
