import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import App from "../App";
import Login from "../page/Login";
import NotFound from "../page/NotFound";
import Signup from "../page/Signup";
import AllBooks from "../page/AllBooks";
import AddBook from "../page/AddBook";
import BookDetails from "../page/BookDetails";
import PrivateRoute from "./privateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/books",
        element: <AllBooks />,
      },
      {
        path: "/add_book",
        element: <AddBook />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <BookDetails />
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
