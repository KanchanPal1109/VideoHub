import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from './ContextApi/UserContext';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import PlayList from "./components/PlayList";
import NoDataFound from "./components/NoDataFound";
import SideMenu from "./components/SideMenu";
import { PlayListProvider } from "./ContextApi/PlayListContext";
import Loader from "./components/Loader";
function App() {
  return (
    <UserProvider>
    <PlayListProvider>
    <Router>
      <div className="app">
        <SideMenu />
      </div>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/playlist" element={<PlayList />} />
          <Route path="*" element={<NoDataFound />} />
          <Route path="*" element={<Loader />} />

        </Routes>
      </div>
    </Router>
    </PlayListProvider>
    </UserProvider>
  );
}

export default App;
