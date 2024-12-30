import { QueryClient, QueryClientProvider, QueryCache } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from "@hooks/index";
import { ThemeProvider } from "@mui/material";
import React from "react";

const ContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const { theme } = useTheme();
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
            <ThemeProvider theme={theme}>
                {children}
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
            </ThemeProvider>
        </QueryClientProvider>
    );
};

export default ContextProvider;