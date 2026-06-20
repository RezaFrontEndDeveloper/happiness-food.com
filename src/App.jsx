import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Header/Navbar";
import { lazy, Suspense } from "react";
import Footer from "./components/Footer/Footer";
import SinglePost from "./components/mainPage/SinglePost";
import ProductSinglePage from "./components/mainPage/ProductSinglePage";
import Spinners from "./components/shared/Spinners";

const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const AboutMe = lazy(() => import("./pages/AboutMe"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<Spinners />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post/:id" element={<SinglePost />} />
              <Route path="/product" element={<Products />} />
              <Route path="/product/:id" element={<ProductSinglePage />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
