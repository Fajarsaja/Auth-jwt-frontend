import Login from "./components/Login";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Register from "./components/Register";
import DashboardPage from "./pages/DashboardPage";



function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/dashboard" element={<DashboardPage />}/>
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;

