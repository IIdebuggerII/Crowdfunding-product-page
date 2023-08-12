import "./App.css";
import Bookmarker from "./components/Bookmarker";
import Header from "./components/Header";
import Price from "./components/Price";
function App() {
  return (
    <>
      <Header></Header>

      <div className="flex flex-col lg:max-w-screen-lg max-w-md items-center mx-auto relative -top-16">
        <Bookmarker></Bookmarker>
        <div className="relative top-80">
          <Price></Price>
        </div>
      </div>
    </>
  );
}

export default App;
