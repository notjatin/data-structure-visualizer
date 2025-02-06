import "./App.css";
import FunctionHeader from "./components/FunctionHeader";
import OutputScreen from "./components/OutputScreen";

function App() {
  return (
    <div className="h-lvh flex flex-col font-mono">
      <FunctionHeader />
      <OutputScreen />
    </div>
  );
}

export default App;
