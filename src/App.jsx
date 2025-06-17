import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<IndexPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </>,
  ),
);

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
