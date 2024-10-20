import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Home from '../../mediglow/src/pages/Home';
import About from '../../mediglow/src/pages/About';
import Contact from '../../mediglow/src/pages/Contact';
import Plants from '../../mediglow/src/pages/Products';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import ProDtl from './pages/ProDtl';
import Quiz from './pages/Quiz';
import Model from './pages/Model';
import { useState,useEffect } from 'react';


function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    // Check if user is already logged in (from localStorage)
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar user={user} />
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/about' element={<About />} />
           <Route path='/contact' element={<Contact />} />
           <Route path='/plants' element={<Plants />} />
           <Route path='/prodtl/:id' element={<ProDtl />} />
           <Route path='/login' element={<Login setUser={setUser} />} />
           <Route path='/signup' element={<Signup />} />
           <Route path='/model' element={<Model />} />
           <Route path='/quiz' element={<Quiz />} />
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
