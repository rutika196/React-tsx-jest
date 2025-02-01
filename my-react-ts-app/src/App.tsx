import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Notfound } from './pages/Notfound';
import { Navbar } from './component/Navbar';
import { Profile } from './pages/Profile';
import './App.css'
import { Dashboard } from './pages/Dashboard';
import UserList from './component/UserList';

function App() {

  return (
    <>
      <Navbar />
      <UserList />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path= "/about" element={<About />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App;
