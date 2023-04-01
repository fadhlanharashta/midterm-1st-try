import {BrowserRouter, Routes, Route} from "react-router-dom"
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import ViewUser from "./components/ViewUser"
import EditUser from "./components/EditUser";
import StartLogin from "./components/StartLogin";
import StartRegister from "./components/StartRegister";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList/>}></Route>
        <Route path="/add" element={<AddUser/>}></Route>
        <Route path="edit/:id" element={<EditUser/>}></Route>
        <Route path="view/:id" element={<ViewUser/>}></Route>
        <Route path="/login" element={<StartLogin/>}></Route>
        <Route path="/register" element={<StartRegister/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
