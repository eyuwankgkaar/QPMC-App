import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './LandingPage/Home';
import MainPage from './LandingPage/MainPage';
import ITform from './Forms/ITform';
import Notificationdisplay from './NotificationSidebar/Notificationdisplay';
import LandingPageHome from './LandingPage/LandingPageHome';


function App() {
  return (
    <Router>
      <Routes>

{/* <Route path='/pending' element={<Notificationdisplay/>}/> */}
<Route path ="/" element={<LandingPageHome/>}/>
<Route path="/it-form" element={<ITform/>}/>
<Route path ="/main-page" element={<MainPage/>}>
  <Route path='/main-page/notification' element={<Notificationdisplay/>}/>
</Route>
 </Routes>
     
    </Router>
  );
}

export default App;
