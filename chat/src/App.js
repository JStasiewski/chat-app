import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import "./style.scss";

function App() {
  const {currentUser} = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={
            // <ProtectRoute>
              currentUser ? <Home /> : <Login/>
             // </ProtectRoute>
            }/>
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
