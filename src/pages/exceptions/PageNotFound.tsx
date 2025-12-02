import { Button, Result } from "antd";
import { useNavigate } from "react-router";

function PageNotFound() {
  const navigate = useNavigate();

  const onBtnClick = () => navigate("/");

  return (
    <Result
      status="404"
      title="404"
      subTitle="对不起，您访问的页面不存在。"
      extra={
        <Button type="primary" onClick={onBtnClick}>
          回到首页
        </Button>
      }
    />
  );
}

export default PageNotFound;
