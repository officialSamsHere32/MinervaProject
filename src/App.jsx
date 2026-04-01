import { Route, Routes, BrowserRouter } from "react-router-dom";
import RootComponent from "./components/index.jsx";
import PriceHold from "./components/Price.jsx";
import Class from "./components/Class.jsx";
import Testimoni from "./components/Testimoni.jsx";
// import CardSection from "./components/card-section.jsx";
import RootForm from "./components/form/RootForm.jsx";
// import History from "./components/History.jsx";
import Footer from "./components/Footer.jsx";
import Banner from "./components/Banner.jsx";
import RootFormProfile from "./components/form/RootFormProfile.jsx";
import RootFormDaftar from "./components/form/RootFormDaftar.jsx"
import NavbarProfile from "./components/NavbarProfile.jsx";
// import Portfolio from "./components/portfolio.jsx";
// import GridLayout from "./components/GridLayout.jsx";
// import Skills from "./components/skills.jsx";

function App() {

  return (
    <>
      <div className="overflow-x-hidden">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <>  
                <RootComponent />
                <Banner />
                <PriceHold />
                <Class />
                <Testimoni />
                <Footer />
              </>
            } />
            <Route path="/masuk" element={
              <RootForm />
              } />
            <Route path="/register" element={
              <RootFormDaftar />
            } />
            <Route path="/profile" element={
              <RootFormProfile />
            } />
          </Routes>
        </BrowserRouter>
        {/* <CardSection />
        <History />
        <Skills />
        <Portfolio /> */}
      </div>
    </>
  );
}

export default App;
