import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Forgotpassword from './pages/Forgotpassword';
import Resetpassword from './pages/Resetpassword';
import Login from './pages/Login';
import Mainlayout from './components/Mainlayout';
import Signup from './pages/Signup';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainlayout/>}/> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/reset-password" element={<Resetpassword/>}/>
        <Route path="/forgot-password" element={<Forgotpassword/>}/>
      </Routes>
    </Router>
  );
}

export default App;
