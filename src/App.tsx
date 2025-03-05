
import './App.css'
import Header from './components/header/Header';
import Athelete from './pages/athelete/Athelete';
import AtheleteDetail from './pages/athelete/AtheleteDetail';
import IndivisualAtheleteDetail from './pages/athelete/IndivisualAtheleteDetail';
import Home from './pages/home/Home';
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfilePage from './pages/Profile/ProfilePage';

const Navigation = [
  { path: "/", element: <Home/>},
  { path: "/login", element: <Login /> },
  { path: "/sign-up", element: <Signup /> },
  { path: "/athelete", element: <Athelete /> },
  { path: "/athelete-detail", element: <AtheleteDetail /> },
  { path: "/user-athelete-detail", element: <IndivisualAtheleteDetail/> },
  { path: "/profile", element: <ProfilePage /> },


];

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          {Navigation.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
