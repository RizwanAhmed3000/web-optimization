import "./App.css";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

const Layout = () => {
  return (
    <div className="app">
      <nav
        style={{ display: "flex", justifyContent: "space-around", gap: "1rem" }}
      >
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
