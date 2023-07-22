import "./App.css";
import Home from "./pages/Home";
import AppContextProvider from "./context/appContext";
function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Home />
      </div>
    </AppContextProvider>
  );
}

export default App;
