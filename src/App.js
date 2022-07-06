import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/Header";
import Cards from "./component/Cards";
import About from "./component/About";
import Text from "./component/Text";
function App() {
  return (
    <div>
       <Router>
       <Header/>
        <Routes>
          <Route path="/" element={<Text/>}></Route>
          <Route path="/Cards" element={<Cards/>}> </Route>
          <Route path="/About" element={<About/>}></Route>
        </Routes>
      
      </Router>

     
        <div className="rout">
      
        </div>
      
    </div>
  );
}

export default App;
