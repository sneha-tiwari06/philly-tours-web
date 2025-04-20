import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './common/header';
import HomePage from './components/home';
import Footer from './common/footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
