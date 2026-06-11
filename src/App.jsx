import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AboutMe from "./pages/AboutMe";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import { createContext, useState } from "react";

export const DataContext = createContext();

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggleMenu() {
    setToggleMenu((prev) => !prev);
  }
  return (
    <DataContext.Provider
      value={{
        toggleMenu,
        setToggleMenu,
        handleToggleMenu,
      }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
