import RegistrationForm from './components/Registration'
import LoginForm from './components/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/register",
      element: <RegistrationForm />
    },
    {
      path: "/login",
      element: <LoginForm />
    }
  ]);

  return (
    <>
      <Navigation/>
      <RouterProvider router={myRouter} />
    </>
  )
}

export default App
