import "./App.css";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Nav from "./common/Nav";
function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Nav />} />
       </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
