import Header from "./Components/Header";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

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
        <RouterProvider router={appRouter}>
          <Body></Body>
        </RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
