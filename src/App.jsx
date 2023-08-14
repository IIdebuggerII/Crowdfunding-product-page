import "./App.css";
import AboutProject from "./components/AboutProject";
import Bookmarker from "./components/Bookmarker";
import Header from "./components/Header";
import Price from "./components/Price";
function App() {
  return (
    <>
      <Header />
      <div className="md:w-11/12 lg:w-9/12 w-10/12 mx-auto ">
        <Bookmarker />
        <Price />
        <AboutProject />
      </div>
    </>
  );
}

export default App;
