import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Forgotpassword from './pages/Forgotpassword';
import Resetpassword from './pages/Resetpassword';
import Login from './pages/Login';
import Mainlayout from './components/Mainlayout';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Search from './pages/Search';
import Upload from './pages/Upload';
import Profile from './pages/Profile';
import Albumdetails from './pages/Albumdetails';
import Song from './pages/Song'
import Searchresults from './pages/Searchresults'
import Editsong from './pages/Editsong';
import {ContextProvider} from "./context/GlobalContext";
function App() {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/reset-password" element={<Resetpassword/>}/>
          <Route path="/forgot-password" element={<Forgotpassword/>}/>
          <Route path="/" element={<Mainlayout />}>
            <Route path="/" element={<Home/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/search-results" element={<Searchresults/>}/>
            <Route path="/upload" element={<Upload/>}/>
            <Route path="/edit-song" element={<Editsong/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/album-detail" element={<Albumdetails/>}/>
            <Route path="/song" element={<Song/>}/>
          </Route>
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
