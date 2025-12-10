import { App as AntdProvider } from "antd";
import { RouterProvider } from "react-router";
import { GlobalInteractionComponent } from "@/components/globalInteractionComponent";
import routers from "./router";

const App = () => {
  return (
    <AntdProvider>
      <GlobalInteractionComponent />
      <RouterProvider router={routers} />
    </AntdProvider>
  );
};

export default App;
