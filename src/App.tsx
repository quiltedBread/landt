import React from "react";
import Position from "./components/Position";
import { State } from "./types";
import { SDE_TEMPLATE } from "./templates";

interface Context {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>
}

export const StateContext = React.createContext<Context | null>(null);

function App() {
  const [state, setState] = React.useState(SDE_TEMPLATE);

  return (
    <div className="app">
      <StateContext.Provider value={{state: state, setState: setState}}>
      <div className="control-panel">
        <div className="instructions">
          <p>Lorem ipsum dolor sit amet.</p>
          <div className="button-container">
            <button>open</button>
            <button>save</button>
          </div>
        </div>
        {state.positions.map((pos, i) => <Position props={pos} key={i}/>)}
      </div>
      <div className="preview-panel">
        <div className="buttons"><button>Download PDF</button></div>
        <div className="preview">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquam corporis obcaecati aperiam laborum rerum error expedita. Repudiandae, libero dolorum!
        </div>
      </div>
      </StateContext.Provider>
    </div>
  );
}

export default App;
