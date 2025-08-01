import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MoreAboutMe from './components/MoreAboutMe';
import './App.css';

function App() {

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/more-about-me" element={<MoreAboutMe />} />
          <Route path="/" element={
            <main className="main-content">
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </main>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
