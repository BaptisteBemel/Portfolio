import Layout from './Components/layout/layout';
import { Routes, Route } from 'react-router-dom';
import Intro from './Components/intro/Intro';
import Cv from './Components/cv/Cv';
import Acti from './Components/acti/Acti';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}> 
        <Route index element={<Intro />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/activites" element={<Acti />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
