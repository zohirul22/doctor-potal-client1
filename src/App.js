import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import AppoientmentPage from './pages/AppoienmentPage/AppoientmentPage';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import Navber from './pages/Navber/Navber';



function App() {
  return (
    <div >
 <Navber></Navber>
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path='appointmentpage' element={<AppoientmentPage></AppoientmentPage>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}
  
export default App;
