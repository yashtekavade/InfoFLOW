import "./App.css";
import gpt from "./assets/tailwind-logo.png";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import login from "./assets/logout-svgrepo-com.svg";

function App() {
  return (
    <div className="App">
      <div className="Sidebar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gpt} alt="new chat" className="logo" />
            <span className="brand">infoFLOW</span>
            <button className="midBtn">
              <img src={addBtn} alt="" className="addBtn" />
              New Chat
            </button>
            <div className="upperSideBottom">
              <button className="query">
                <img src={msgIcon} alt="Query" />
                What is Programming?
              </button>
              <button className="query">
                <img src={msgIcon} alt="Query" />
                How to use API?
              </button>
            </div>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="" className="listItemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={login} alt="" className="listItemsImg" />
            LogOut
          </div>
        </div>
      </div>
      <div className="main"></div>
    </div>
  );
}

export default App;
