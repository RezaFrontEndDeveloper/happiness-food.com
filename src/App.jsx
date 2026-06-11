import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AboutMe from "./pages/AboutMe";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import { createContext, useState } from "react";
import Footer from "./components/Footer/Footer";

export const DataContext = createContext();

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);

  function handleToggleMenu() {
    setToggleMenu((prev) => !prev);
  }

  function handleToogleSearch() {
    setToggleSearch((prev) => !prev);
  }
  return (
    <DataContext.Provider
      value={{
        toggleMenu,
        setToggleMenu,
        handleToggleMenu,
        toggleSearch,
        setToggleSearch,
        handleToogleSearch,
      }}>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Products />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
