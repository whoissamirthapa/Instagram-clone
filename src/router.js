import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Navigate } from "react-router";

import App from "./App";
import Error404 from "./page/404error/404";
import LoginPage from "./page/LoginSignup/LoginPage";
import SignUp from "./page/LoginSignup/Signuppage";

export default function Router(){
  
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} exact />
          <Route path="/home" element={<App />} exact/>       
          <Route path="/login" element={<LoginPage />} exact/>
          <Route path="/signup" element={<SignUp />} exact/>
          <Route path="*" element={<Error404 />} exact/>
        </Routes>
      </BrowserRouter>
    );
}

