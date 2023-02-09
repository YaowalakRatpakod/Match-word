import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./component/Register";
import Main from "./component/Main";
import History from "./component/History";
import Game from "./component/Game";
// import game from "./component/game";
// import history from "./component/history";
function App() {
  return (
    // <div className="App">
    //   {/* <Register /> */}
    //   <Main/>
    //   {/* <game/>
    //   <history/> */}
    // </div>
    <Routes>
      <Route path="/Main" element={<Main />} />
      <Route path="/Game" element={<Game />} /> 
      <Route path="/history" element={<History/>} />
    </Routes>
  );
}

export default App;
