import useDebugRender from "tilg";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Layout } from "@/components/layout";

const App = () => {
  useDebugRender();

  return (
    <Layout>
      <Outlet />
      <ScrollRestoration />
    </Layout>
  );
};

export default App;
