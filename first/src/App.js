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
import Inline from "./Components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./Components/Form";
import LifecycleA from "./Components/LifecycleA";
import FragmentDemo from "./Components/FragmentDemo";
import Table from "./Components/Table";
import PureComp from "./Components/PureComp";
import RegComp from "./Components/RegComp";
import ParentComp from "./Components/ParentComp";
import { Component } from "react";
import RefsDemo from "./Components/RefsDemo";
import FocusInput from "./Components/FocusInput";
import FRParentInput from "./Components/FRParentInput";
import PortalDemo from "./Components/PortalDemo";
import Hero from "./Components/Hero";
import ErrorBoundary from "./Components/ErrorBoundary";
import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";
import ClickCounterTwo from "./ClickCounterTwo";
import HoverCounterTwo from "./Components/HoverCounterTwo";
import User from "./Components/User";
import CounterTwo from "./Components/CounterTwo";
import ComponentC from "./Components/ComponentC";
import { UserProvider } from "./Components/userContext";



class App extends Component {
  render() {
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

        {/* <Stylesheet primary={true}/> */}
        {/* <Stylesheet primary={false}/> 
      ----- If false the color will be black ----- */}

        {/* <Inline/> */}

        {/* 
        <h1 className="error">Error</h1> --This can be used in Inline
        <h1 className={styles.success}>Success</h1> --This cannot be used in Inline because its a Module 
        */}

        {/* <Form/> */}

        {/* <LifecycleA/> */}

        {/* ---Fragment Component--- */}
        {/* <FragmentDemo/> */}
        {/* <Table/> */}

        {/* ---Pure Component--- */}
        {/* <ParentComp/> */}

        {/* ---Memo Component--- */}
        {/* <ParentComp/> */}

        {/* <RefsDemo/> */}

        {/* <FocusInput/> */}

        {/* <FRParentInput/> */}

        {/* <PortalDemo/> */}

        {/*
        <ErrorBoundary>
        <Hero heroName="Batman"/>
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroName="Siperman"/>
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroName="Joker"/> 
        </ErrorBoundary> 
        */}
        {/*If you remove Joker it will not show error*/}

        {/* <ClickCounter name = "Vaithi"/>
        <HoverCounter/> */}

        {/* <ClickCounterTwo/>
        <HoverCounterTwo/>
        <User render={ (isLoggedIn) => isLoggedIn ? "Vaithi" : "Guest"}/> */} 

        {/*
        <CounterTwo 
          render = {(count, incrementCount) => 
            <ClickCounterTwo count={count} incrementCount={incrementCount}
            /> 
          }
        />
        <CounterTwo 
          render = {(count, incrementCount) => 
            <HoverCounterTwo count={count} incrementCount={incrementCount}
            /> 
          }
        />
        */}

        <UserProvider value="Vaithi">
          <ComponentC/>
        </UserProvider>
        
      </div>
    );
  }
}

export default App;
