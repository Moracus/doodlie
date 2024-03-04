import Canvas from "./components/Canvas";

function App() {
  return (
    <>
      <div
        className="h-full overflow-y-hidden p-7 flex flex-col items-center justify-center
      gap-5 max-md:pt-1 max-md:pr-3 bg-Eerieblack"
      >
        <Canvas backgroundColor={"#ffffff"}/>
      </div>
    </>
  );
}

export default App;
