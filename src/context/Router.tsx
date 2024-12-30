import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

type RouterType = ReturnType<typeof createBrowserRouter>;

interface IPrivateProps {
    router: RouterType;
}

const RouterComponent: React.FC<IPrivateProps> = ({ router }) => {
    return (
        <RouterProvider router={router} />
    );
};

export default RouterComponent;