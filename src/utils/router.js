import { createBrowserRouter, Navigate } from "react-router-dom";
import RootPage from "../pages/RootPage";
import MainPage from "../pages/MainPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
        errorElement: <Navigate to="/" />,
        children: [
            { index: true, element: <MainPage /> },
            //{ path: ":item", element: <ItemPage items={items} /> },
        ],
    }
])
