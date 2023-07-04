import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import TrackVisibility from "react-on-screen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <TrackVisibility>
        <RouterProvider router={router} />
      </TrackVisibility>
    </>
  );
}

export default App;
