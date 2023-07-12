import "./App.css";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";

function App() {
  return (
    <>
      <div className="p-[40px] bg-[#F0F0F0]  not-italic ">
        <h1 className=" text-3xl font-bold p-3 font-Cabin">Mash My room </h1>
        <div className="flex gap-[50px] ">
          <LeftContainer />
          <RightContainer />
        </div>
      </div>
    </>
  );
}

export default App;
