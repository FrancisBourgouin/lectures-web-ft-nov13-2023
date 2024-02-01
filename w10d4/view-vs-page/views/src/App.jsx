import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import User from "./components/User";

function App() {
  const [currentView, setCurrentView] = useState("home");
  return (
    <>
      <div>
        <button onClick={() => setCurrentView("home")}>HOME</button>
        <button onClick={() => setCurrentView("user")}>USER</button>
      </div>
      {currentView === "home" && <Home />}
      {currentView === "user" && <User />}
    </>
  );
}

export default App;
