import RegistrationForm from './components/Registration'
import LoginForm from './components/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <><Navigation/><Home/></>
    },
    {
      path: "/register",
      element: <><Navigation/><RegistrationForm /></>
    },
    {
      path: "/login",
      element: <><Navigation/><LoginForm/></>
    }
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  )
}

export default App
