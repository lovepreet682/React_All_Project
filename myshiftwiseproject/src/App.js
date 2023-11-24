import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/slideBarNav/Home/Homepage';
import Roster from './components/slideBarNav/roster/Roster';
import SlideBar from './components/slideBarNav/SlideBar';
import Country from './components/slideBarNav/navSettings/Country';
import State from './components/slideBarNav/navSettings/State';
import TimeZone from './components/slideBarNav/navSettings/TimeZone';
import Holiday from './components/slideBarNav/navSettings/Holiday';
import SystemCMS from './components/slideBarNav/cms/SystemCMS';
import Vendor_CMS from './components/slideBarNav/cms/Vendor_CMS';
import NameSapce_CMS from './components/slideBarNav/cms/NameSapce_CMS';
import SystemConfig_CMS from './components/slideBarNav/cms/SystemConfig_CMS';
import CreateUser from './components/slideBarNav/userModule/CreateUser';
import CreateRole from './components/slideBarNav/userModule/CreateRole';
import CreateClient from './components/slideBarNav/userModule/CreateClient';
import Profile from './components/slideBarNav/userProfile/Profile';
import Logout from './components/slideBarNav/userProfile/Logout';



function App() {
  return (
    <>
 
       <Routes>
          <Route path='/' element={<SlideBar/>}>
          <Route path='home' element={<Homepage/>} />
          <Route path='roster' element={<Roster/>} />
          <Route path='country' element={<Country/>}/>
            <Route path='state' element={<State/>}/>
            <Route path='timezone' element={<TimeZone/>}/>
            <Route path='holiday' element={<Holiday/>}/>

            <Route path='system_cms' element={<SystemCMS/>}/>
            <Route path='vendor_cms' element={<Vendor_CMS/>}/>
            <Route path='namespace_cms' element={<NameSapce_CMS/>}/>
            <Route path='systemconfig_cms' element={<SystemConfig_CMS/>}/>

            <Route path='createuser' element={<CreateUser/>}/>
            <Route path='createrole' element={<CreateRole/>}/>
            <Route path='createclient' element={<CreateClient/>}/>

            <Route path='profile' element={<Profile/>}/>
            <Route path='logout' element={<Logout/>}/>
                        
          </Route>
        </Routes>
    </>
  );
}

export default App;
