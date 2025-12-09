import { App } from "antd";
import type { MessageInstance } from "antd/es/message/interface";
import type { ModalStaticFunctions } from "antd/es/modal/confirm";
import type { NotificationInstance } from "antd/es/notification/interface";

let message: MessageInstance;
let modal: Omit<ModalStaticFunctions, "warn">;
let notification: NotificationInstance;

const AntdApp = () => {
  const AntdApp = App.useApp();
  message = AntdApp.message;
  modal = AntdApp.modal;
  notification = AntdApp.notification;
  return null;
};

export default AntdApp;

export { message, modal, notification };
