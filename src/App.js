import Layout from './Components/layout/layout';
import { Routes, Route } from 'react-router-dom';
import Intro from './Components/intro/Intro';
import Cv from './Components/cv/Cv';
import Acti from './Components/acti/Acti';

function App() {
  return (
    <>
    <Routes>
      <Route path="/Portfolio/" element={<Layout />}> 
        <Route index element={<Intro />} />
        <Route path="/Portfolio/cv" element={<Cv />} />
        <Route path="/Portfolio/activites" element={<Acti />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
