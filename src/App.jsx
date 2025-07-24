import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/Register";
import SignInPage from "./pages/SignIn";
import FeedPage from "./pages/FeedPage";
import NavBar from "./components/Navbar";
import "./App.css";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/feed" element={<FeedPage />} />
      </Routes>
    </>
  );
}
export default App;
