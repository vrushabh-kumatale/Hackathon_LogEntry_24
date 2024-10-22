
import './App.css';
import Login from './component/Login';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Registration from './component/Registration';
import Dashboard from './component/Dashboard';
import Modules from './component/Modules';
import LogSubmit from './component/LogSubmit';
import Logs from './component/Logs';




function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Login/>} exact ></Route>
      <Route path='/registration' element={<Registration/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/modules' element={<Modules/>}></Route>
      <Route path = '/logssubmitted' element={<LogSubmit/>}></Route>
      <Route path = '/logs' element={<Logs/>}></Route>

      
     
    </Routes>

    <ToastContainer position='top-right' autoClose={1500} />

    </BrowserRouter>
  );
}

export default App;
