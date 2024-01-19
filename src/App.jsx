import Header from "./Components/Header";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  /*
  header
  body
    - sidebar
    - video container 
      - button list
      - video card


  */

  return (
    <Provider store={store}>
      <div>
        <Header></Header>
        <Body></Body>
      </div>
    </Provider>
  );
}

export default App;
