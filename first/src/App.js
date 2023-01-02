import logo from "./logo.svg";
import "./App.css";
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Hello from "./Components/Hello";
import Message from "./Components/Message";
import Counter from "./Components/Counter";
import FunctionClick from "./Components/FunctionClick";
import ClassClick from "./Components/ClassClick";
import EventBind from "./Components/EventBind";
import ParentComponent from "./Components/ParentComponent";
import UserGreeting from "./Components/UserGreeting";
import NameList from "./Components/NameList";
import Stylesheet from "./Components/Stylesheet";

function App() {
  return (
    <div className="App">
      {/* <Hello /> */}

      {/* 
      <Greet name="Bruce" heroName="Batman" children="Robin">
        <p>This is chidren props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder women"></Greet>

      <Welcome  name="Clark" heroName="Superman"/> 
      */}

      {/* <Message /> */}

      {/* <Counter/> */}

      {/* <Greet name="Diana" heroName="Wonder women"></Greet> 
      -----Here this is done to show off Props destruction-----*/}

      {/* <Welcome name="Bruce" heroName="Batman"></Welcome> 
      -----Here this is done to show off Props destruction-----*/}

      {/*---Evente Handling:---*/}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}

      {/* <EventBind/> */}

      {/* <ParentComponent/> */}

      {/* <UserGreeting/> */}

      {/* <NameList /> */}

      <Stylesheet primary={true}/>
      <Stylesheet primary={false}/>

    </div>
  )
}

export default App;