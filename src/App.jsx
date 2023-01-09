import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { HiMoon } from "react-icons/hi";
import "./App.scss";
import { AiOutlineSearch } from "react-icons/ai";
import SearchBox from "./components/SearchBox";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      {/* <header>
       
        <a class="logo" href="#">
          Cute Puppies Express!
        </a>
      </header> */}
      <header>
        <element className="One">Where in the world?</element>
        <div className="darkModeContainer">
          <span>
            <HiMoon
              className="icon_dark_mode"
              width="20"
              height="20"
              title="sdsa"
              alt="dsfsf"
            ></HiMoon>
          </span>

          <span className="darkModeText">Dark Mode</span>
        </div>

        {/* <time>08.12.2014</time> */}
      </header>
      {/* <div className="search-box">
        <span>
          <input
            type="text"
            className="search-box__input"
            placeholder="Search for a country..."
          />
        </span>
      </div> */}
      <SearchBox />
      const rivka = <Welcome name="Sara" age="16" />
      {/* <p>
        I love beagles <em>so</em> much! Like, really, a lot. They’re adorable
        and their ears are so, so snuggly soft!
      </p> */}
    </div>
  );
}

function Welcome(props) {
  return (
    <h1>
      Hello, {props.name}, {props.age}
    </h1>
  );
}

export default App;
