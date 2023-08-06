import { BrowserRouter } from "react-router-dom";
import RoutesDirectory from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <RoutesDirectory />
    </BrowserRouter>
  );
};

export default App;
