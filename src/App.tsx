import "./App.css";
import BackButton from "./UI/Atoms/TextButton/BackButton";


function App() {
  return (
    <>
      <div>
        <BackButton label="Back to candidates" onClick={() => alert("clicked!")} />
      </div>
    </>
  );
}

export default App;
