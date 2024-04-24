import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from "../screens/signup";
import ProtectedRoutes from "../components/protectedRoutes";
import Home from "../screens/home";
import Login from "../screens/login";
import AddArticlePage from "../screens/addArticle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp/>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <ProtectedRoutes component={Home} />,
  },
  {
    path: "/ajouter-articles",
    element: <ProtectedRoutes component={AddArticlePage} />,
  },
]);

const Routes = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default Routes;
