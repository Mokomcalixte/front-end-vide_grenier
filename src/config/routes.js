import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  import SignUp from "../screens/signup";
  import ProtectedRoutes from "../components/protectedRoutes";
  import Home from "../screens/home";
  import Login from "../screens/login";
  const router = createBrowserRouter([
/*     {
      path: "/",
      element: <SignUp/>,
    }, */
    {
      path: "/",
      element: <ProtectedRoutes component={Home}  />,
      },
    {
    path: "/signup",
    element: <ProtectedRoutes component={SignUp}  />,
    },
    {
      path: "/login",
      element: <Login/>,
    }

  
  ]);
  const Routes = () => {
    return (
        <RouterProvider router={router} />
    );
}
export default Routes;