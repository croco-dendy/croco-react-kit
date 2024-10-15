import type { PropsWithChildren } from "react";
import { baseTheme, Container } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <ErrorBoundary fallbackRender={() => null}>
      <Header />
      <Container p={0} maxW={baseTheme.breakpoints.lg}>
        {children}
      </Container>
      <Footer />
    </ErrorBoundary>
  );
};

export default Layout;
