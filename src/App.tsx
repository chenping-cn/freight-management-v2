import { App as AntdApp } from "antd";
import { BrowserRouter } from "react-router";
import { GlobalCompo } from "@/components/globalCompo";
import AppRouter from "./router";

const App = () => {
  return (
    <AntdApp>
      <GlobalCompo />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AntdApp>
  );
};

export default App;
