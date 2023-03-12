import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Add from "./component/Add";
import Book from "./component/Book";
import Update from "./component/Update";
import './style.css'

function App() {

  const router = createBrowserRouter([
    {
      path: "/books",
      element: <Book/>,
    },
    {
      path: "/add",
      element: <Add/>,
    },
    {
      path: "/update/:id",
      element: <Update/>,
    },
  ]);
  
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

