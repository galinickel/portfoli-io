import './assets/styles/main.scss';
import { HashRouter, Route } from 'react-router-dom'

import Header from './cmps/header.jsx'
import Home from './views/home.jsx'
import Editor from './views/editor.jsx'

import 'antd/dist/antd.css';

const App = () => {
  return (
    <div className="App">
      <HashRouter >

        <Header />
        <Route path="/editor"  component={Editor} />
        <Route path="/" exact component={Home} />

      </HashRouter>
    </div>
  );
}

export default App;
