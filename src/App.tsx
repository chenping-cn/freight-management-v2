import { BrowserRouter } from "react-router";
import AppRouter from "./router";
import { AntdApp } from "@/components/antdApp";

const App = () => {
  return (
    <AntdApp>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AntdApp>
  );
};

export default App;
