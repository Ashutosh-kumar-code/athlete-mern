
import './App.css'
import Header from './components/header/Header';
import Athelete from './pages/athelete/Athelete';
import AtheleteDetail from './pages/athelete/AtheleteDetail';
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Navigation = [
  { path: "/", element: <div>hello</div>},
  { path: "/login", element: <Login /> },
  { path: "/sign-up", element: <Signup /> },
  { path: "/athelete", element: <Athelete /> },
  { path: "/athelete-detail", element: <AtheleteDetail /> },


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
