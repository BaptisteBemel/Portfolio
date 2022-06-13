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
        <Route path="/activites" element={<Acti />}>
          <Route path="/activites/tutorat" element={<Acti />} />
          <Route path="/activites/hackathon" element={<Acti />} />
          <Route path="/activites/web" element={<Acti />} />
          <Route path="/activites/progra" element={<Acti />} />
          <Route path="/activites/ldap" element={<Acti />} />
          <Route path="/activites/secu" element={<Acti />} />
          <Route path="/activites/notech" element={<Acti />} />
        </Route>
      </Route>
    </Routes>
    </>
  );
}

export default App;
