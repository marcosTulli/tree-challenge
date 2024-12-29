import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient, QueryCache } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type RouterType = ReturnType<typeof createBrowserRouter>;

interface IPrivateProps {
    router: RouterType;
}

function RouterComponent({ router }: IPrivateProps) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            },
        },
        queryCache: new QueryCache(),
    });

    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
            />
        </QueryClientProvider>
    );
}

export default RouterComponent;
