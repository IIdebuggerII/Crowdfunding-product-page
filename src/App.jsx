import "./App.css";
import Bookmarker from "./components/Bookmarker";
import Header from "./components/Header";
import Price from "./components/Price";
function App() {
  return (
    <>
      <Header />
      <div className="md:w-9/12 lg:w-8/12 w-11/12 mx-auto ">
        <Bookmarker />
        <Price />
      </div>
    </>
  );
}

export default App;
