import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Contador from "../components/Contator";
import ErrorPage from "../components/ErrorPage";
import FetchNews from "../components/FetchNews";
import { PageLayout } from "../components/PageLayout";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />} errorElement={<ErrorPage />}>
      <Route index path="sobre" element={<Contador />} />
      <Route path="noticias" element={<FetchNews />} />
      <Route path="contato" element={<Contador />} />
    </Route>
  )
);

const Root = () => {
  return <RouterProvider router={route} />;
};

export default Root;