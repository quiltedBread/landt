import Position from "./components/Position";

function App() {
  return (
    <div className="app">
      <div className="control-panel">
        <div className="instructions">
          <p>Lorem ipsum dolor sit amet.</p>
          <div className="button-container">
            <button>open</button>
            <button>save</button>
          </div>
        </div>
      <Position name="job 2" />
      <Position name="job 1" />
      </div>
      <div className="preview-panel">
        <div className="buttons"><button>Download PDF</button></div>
        <div className="preview">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquam corporis obcaecati aperiam laborum rerum error expedita. Repudiandae, libero dolorum!
        </div>
      </div>
    </div>
  );
}

export default App;
