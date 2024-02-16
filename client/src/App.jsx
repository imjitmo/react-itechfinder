import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Header />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
