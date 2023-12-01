import './App.css';
import {Navbar} from "./components/Navbar";
import {Home} from "./components/Home";
import {Route, Routes} from "react-router-dom";
import {Transaction} from "./components/Transaction";
import {Data} from "./components/Data";

function App() {
  return (
      <>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/transaction" element={<Transaction/>} />
              <Route path="/data" element={<Data/>} />
          </Routes>
      </>
  );
}

export default App;
