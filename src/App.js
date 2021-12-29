import { useState } from "react";
import "./App.css";

function App() {
  const [left, setLeft] = useState(null);
  const [top, settop] = useState(null);

  const handleEnter = () => {
    setLeft(Math.floor(Math.random() * 500) + 1);
    settop(Math.floor(Math.random() * 300) + 1);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Yıl sonu anketi</h1>
      </div>

      <div className="content">
        <div className="App">
          <h3>Maaşınıza zam istiyor musunuz?</h3>
          <div className="button">
            <button className="btnFirst">Hayır</button>

            <button onMouseEnter={handleEnter} className="btnSecond" style={{ left: left, top: top }}>
              Evet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
