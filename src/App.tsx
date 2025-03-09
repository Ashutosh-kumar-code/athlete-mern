
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
import { useState } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotificationPage from './pages/NotificationPage';


function App() {
  const [toggleAuthApi, settoggleAuthApi] = useState(false);

  const Navigation = [
    { path: "/", element: <Home/>},
    { path: "/login", element: <Login settoggleAuthApi={settoggleAuthApi} toggleAuthApi={toggleAuthApi} /> },
    { path: "/sign-up", element: <Signup /> },
    { path: "/athelete", element: <Athelete /> },
    { path: "/athelete-detail", element: <AtheleteDetail /> },
    { path: "/user-athelete-detail", element: <IndivisualAtheleteDetail/> },
    { path: "/profile", element: <ProfilePage /> },
    { path: "/notificatios", element: <NotificationPage /> },

  ];

  console.log("toggleAuthApi=====",toggleAuthApi)

  return (
    <>
      <BrowserRouter>
      <Header settoggleAuthApi={settoggleAuthApi} toggleAuthApi={toggleAuthApi} />
        <Routes>
          {Navigation.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
