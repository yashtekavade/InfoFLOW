import "./App.css";
import gpt from "./assets/tailwind-logo.png";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import login from "./assets/logout-svgrepo-com.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/tailwind-logo.png";

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
      <div className="main">
        <div className="chats">
          <div className="chat user">
            <img className="chatImg" src={userIcon} alt="" />
            <p className="txt">lorem ipsum dolor sit amet, consectetur</p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src={gptImgLogo} alt="" />
            <p className="txt">
              lorem ipsum dolor sit amet, consectetur lorem templorem ipsum
              dolor sit amet, consectetur lorem templorem ipsum dolor sit amet,
              consectetur lorem templorem ipsum dolor sit amet, consectetur
              lorem templorem ipsum dolor sit amet, consectetur lorem templorem
              ipsum dolor sit amet, consectetur lorem templorem ipsum dolor sit
              amet, consectetur lorem templorem ipsum dolor sit amet,
              consectetur lorem templorem ipsum dolor sit amet, consectetur
              lorem templorem ipsum dolor sit amet, consectetur lorem templorem
              ipsum dolor sit amet, consectetur lorem templorem ipsum dolor sit
              amet, consectetur lorem templorem ipsum dolor sit amet,
              consectetur lorem templorem
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Message infoFLOW..." />
            <button className="send">
              <img src={sendBtn} alt="Send" className="sendBtn" />
            </button>
          </div>
          <p className="txt">
            infoFLOW can make mistakes. Consider checking important information.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
