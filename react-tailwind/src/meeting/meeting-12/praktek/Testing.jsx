import { createBrowserRouter, RouterProvider } from "react-router-dom";
function HomePage() {
  return (
    <>
      <h1>HomePage</h1>
    </>
  );
}
function Testing() {
  return (
    <>
      <h1>Testing</h1>
    </>
  );
}

function TestingJSX() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    //   errorElement: <NotFoundPage />,
    },

    {
      path: "/testing",
      element: <Testing />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default TestingJSX;
