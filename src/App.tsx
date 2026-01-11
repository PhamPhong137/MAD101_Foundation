import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Chapters from './pages/Chapters';
import ChapterDetail from './pages/ChapterDetail';
import Formulas from './pages/Formulas';
import Quiz from './pages/Quiz';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chapters" element={<Chapters />} />
          <Route path="/chapter/:chapterId" element={<ChapterDetail />} />
          <Route path="/formulas" element={<Formulas />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
