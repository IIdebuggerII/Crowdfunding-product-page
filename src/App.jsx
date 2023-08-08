import "./App.css";
import Bookmarker from "./components/Bookmarker";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col lg:max-w-screen-sm max-w-xs items-center mx-auto relative -top-16">
        <Bookmarker></Bookmarker>
      </div>
    </>
  );
}

export default App;
