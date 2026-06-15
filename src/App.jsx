import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AboutMe from "./pages/AboutMe";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import { createContext, useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import SinglePost from "./components/SinglePost";
import ProductSinglePage from "./components/mainPage/ProductSinglePage";

export const DataContext = createContext();

function App() {
  const [basket, setBasket] = useState(() => {
    const data = localStorage.getItem("basket");
    return data ? JSON.parse(data) : [];
  });
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleBasket, setToggleBasket] = useState(false);

  function addToBasket(item) {
    setBasket((prev) => [...prev, item]);
  }
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  function handleToggleBasket() {
    setToggleBasket((prev) => !prev);
  }
  function handleDeleteItemAtBasket(id) {
    const newBasket = basket.filter((item) => {
      return item.id !== id;
    });
    setBasket(newBasket);
  }

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
        toggleBasket,
        handleToggleBasket,
        setToggleBasket,
        basket,
        addToBasket,
        setBasket,
        handleDeleteItemAtBasket,
      }}>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post/:id" element={<SinglePost />} />
              <Route path="/product" element={<Products />} />
              <Route path="/product/:id" element={<ProductSinglePage />} />
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
