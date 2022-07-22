import React from "react";
const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee",
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222",
    },
  };
  
  function App() {
    const [themeName, setThemeName] = React.useState("light");
    const currentTheme = themes[themeName];
    return (
      <>
        <select
          onChange={(event) => setThemeName(event.target.value)}
          value={themeName}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
  
        <Toolbar theme={currentTheme} />
      </>
    );
  }
  
  function Toolbar({ theme }) {
    return (
      <div>
        <ThemedButton theme={theme} />
      </div>
    );
  }
  
  function ThemedButton({ theme }) {
    const { background, foreground } = theme;
    return (
      <button
        style={{
          backgroundColor: background,
          color: foreground,
        }}
      >
        Click Me
      </button>
    );
  }
  
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
export default App;