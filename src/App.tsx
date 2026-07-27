import "./App.css";
import DropdownMenu from "./UI/Atoms/DropdownMenu/DropdownMenu";

const list = ["Frontend" , "Backend" , "DevOps"];

function App() {
  return (
    <>
      <div>Intern CV Screening</div>
      <DropdownMenu options= {list} size={"large"}>

      </DropdownMenu>
    </>
  );
}

export default App;
