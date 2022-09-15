import CakeContainer from "./componets/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./componets/hooksCakeContainer";
import HooksIceCreamContainer from "./componets/hooksIceCream";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <HooksIceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
