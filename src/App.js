import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import react, {useState} from 'react';
import About from "./components/About";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [isDark, toggleDark] = useState(false);
  const tDark = ()=> {
    toggleDark(!isDark);
  }
  return (
    <>
    <Router>
    <Navbar title={5} isDark={isDark} toggleDark={tDark} />
    <div className="container my-3">
      <Routes>
        <Route path="/" element={<TextBox heading="Enter Text Here To Manipulate" />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    </Router>
    </>
  ); 
}



export default App;