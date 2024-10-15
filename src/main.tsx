import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { queryClient } from "@/core/queries";
import { Loader } from "@/components/loader";
import { theme } from "@/styles";
import router from "@/router";
import "@/styles/tailwind.css";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <RouterProvider router={router} fallbackElement={<Loader />} />
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>,
);
