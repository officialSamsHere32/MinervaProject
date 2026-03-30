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
import NavbarS from "./components/NavbarSignup.jsx";
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
              </>
            } />
            <Route path="/masuk" element={
              <RootForm />
              } />
          </Routes>
        </BrowserRouter>
        {/* <CardSection />
        <History />
        <Skills />
        <Portfolio /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
