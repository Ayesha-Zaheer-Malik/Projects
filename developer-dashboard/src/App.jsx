import React, { useContext } from "react";
import { ThemeContext } from "./Context";   
import Dashboard from "./Dashboard";        
import "./App.css";



function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
    
  return (
    <div className={`app ${theme}`}>
      <button className="theme-toggle" onClick={toggleTheme} style={{marginLeft:'900px'}}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      
      <Dashboard />
    </div>
  );
}

export default App;
