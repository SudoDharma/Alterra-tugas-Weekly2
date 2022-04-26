import './App.css';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Section from "./components/Section"

import { data } from './data';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route index element={<Section data={data[0]}/>}/>
          {data.map((section, sectionIdx) => (
            <Route path={section.path} element={<Section data={section}/>} key={sectionIdx}/>
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
