import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CountryDetails from "./components/CountryDetails";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/home/:name" element={<CountryDetails></CountryDetails>}></Route>
    </Routes>
      
    </>
  );
}

export default App;
