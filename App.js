import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodosApi from "./API/TodosApi";
import "./App.css";
import Form from "./FormValidation/Form";
import FormVal from "./FormValidation/FormVal";
import Main from "./Hooks/Main";
import About from "./React_Router/About";
import Home from "./React_Router/Home";
import Profile from "./React_Router/Profile";

function App() {
  return (
    <div>
      {/* <Main/> */}

      {/* <Form/> */}

      {/* <FormVal /> */}

      {/* <TodosApi /> */}

      {/* React Router */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
