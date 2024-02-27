import { useState } from "react";
import "./App.css";
import Propsdemo from "./exercises/PropsDemo";
import ListDemo from "./exercises/ListDemo";
import EventDemo1 from "./exercises/EventDemo1";
import FormUncontrolled from "./exercises/FormUncontrolled";
import StateDemo1 from "./exercises/StateDemo1";
import StateDemo2 from "./exercises/StateDemo2";
import StateDemo3 from "./exercises/StateDemo3";
import UseEffectDemo from "./exercises/UseEffect";
import FetchDemo1 from "./exercises/FetchDemo1";
import LiftingState from "./exercises/LiftingState";

export default function App() {
  const [selectedView, setSelectedView] = useState("info");

  function handleSelected(selected: string) {
    setSelectedView(selected);
  }

  return (
    <>
      <div className="outer-div-style">
        <div className="header-style">
          <h2>React Exercises</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: 10 }}>
            <Buttons onSelected={handleSelected} />
          </div>
          <div className="exercise-style">
            {selectedView == "info" ? (
              <p>All exercises for React day-1</p>
            ) : null}
            {selectedView == "props1" ? <Propsdemo title="Props Demo" /> : null}
            {selectedView == "list" ? <ListDemo title="List Demo" /> : null}
            {selectedView == "event1" ? <EventDemo1 title="List Demo" /> : null}
            {selectedView == "form1" ? (
              <FormUncontrolled title="form1" />
            ) : null}
            {selectedView == "state1" ? (
              <StateDemo1 title="State Demo1" />
            ) : null}
            {selectedView == "state2" ? (
              <StateDemo2 title="State Demo2" />
            ) : null}
            {selectedView == "state3" ? (
              <StateDemo3 title="State Demo3" />
            ) : null}
            {selectedView == "useeffect" ? (
              <UseEffectDemo title="useEffect Demo" />
            ) : null}
            {selectedView == "fetch1" ? (
              <FetchDemo1 title="Fetching API Data 1" />
            ) : null}
            {selectedView == "lifting" ? (
              <LiftingState title="Lifting state" />
            ) : null}
            {/* *Add the exercise components you create for each exercise using the key you used for the matching button  */}
          </div>
        </div>
      </div>
    </>
  );
}
type ButtonProps = {
  onSelected: (selected: string) => void;
};
const Buttons = (props: ButtonProps) => {
  // const { onSelected: handleSelected, btnStyle: btnStyle } = props;
  const { onSelected: handleSelected } = props;
  return (
    <>
      <button className="btn-w100" onClick={() => handleSelected("info")}>
        Info
      </button>
      {/* Add a new button for each of the exercises you complete */}
      <button className="btn-w100" onClick={() => handleSelected("props1")}>
        Props demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("list")}>
        List demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("event1")}>
        Event demo 1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("form1")}>
        Form Uncontrolled
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state1")}>
        State demo1 (Count)
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state2")}>
        State demo2 (Update Object)
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state3")}>
        State demo3 (Update Array)
      </button>
      <button className="btn-w100" onClick={() => handleSelected("useeffect")}>
        useEffect demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("fetch1")}>
        Fetch demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("lifting")}>
        Lifting state
      </button>
    </>
  );
};
