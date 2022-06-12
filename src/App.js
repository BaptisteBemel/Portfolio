import Header from './Components/header/Header';
import Intro from './Components/intro/Intro';
import Acti from './Components/acti/Acti';
import About from './Components/about/About';
import Cv from './Components/cv/Cv';
import Layout from './Components/layout/layout';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} /> 
    </Routes>
    </>
    /*<div>
      <Header/>
      <Intro/>
      <Cv/>
      <Acti/>
      <About/>
    </div>*/
  );
}

export default App;
