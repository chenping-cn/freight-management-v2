import { App as AntdApp } from "antd";
import { BrowserRouter } from "react-router";
import { GlobalInteractionComponent } from "@/components/globalInteractionComponent";
import AppRouter from "./router";

const App = () => {
  return (
    <AntdApp>
      <GlobalInteractionComponent />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AntdApp>
  );
};

export default App;
