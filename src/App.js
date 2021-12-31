import { useState } from "react";
import "./App.css";

function App() {
  const [left, setLeft] = useState(null);
  const [top, settop] = useState(null);
  const [click, setCLick] = useState(false);
  const [active, setActive] = useState('');

  const handleEnter = () => {
    setLeft(Math.floor(Math.random() * 600) + 1);
    settop(Math.floor(Math.random() * 250) + 1);
  };
  const handleClick = () => {
    setCLick(true);
    setActive('active')
  };

  const uri = 'https://cdn.discordapp.com/attachments/814898875776237598/925830283268345936/bpc-logo_white.png'
  return (
    <div className="container">
      <div className="header">
        <img style={{width:'100px',height:'40px',objectFit:'cover'}} src={uri} alt="boyasan" />
        <h1>Yıl sonu anketi</h1>

      </div>

      <div className="content">
        <div className="App">
          <h3>Maaşınıza zam istiyor musunuz?</h3>
          <div className={`button ${active}`}>
            {click ? (
              <h4 style={{textAlign:'center'}}>Maaşınıza zammı hak ettiniz?</h4>
            ) : (
              <>
                <button className="btnFirst">Evet</button>

                <button
                  onClick={handleClick}
                  onMouseEnter={handleEnter}
                  className="btnSecond"
                  style={{ left: `${left}px`, top: `${top}px` }}
                >
                  Hayır
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
