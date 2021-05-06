import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Routes from "./routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
