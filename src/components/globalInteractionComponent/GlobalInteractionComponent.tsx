import { App } from "antd";
import type { MessageInstance } from "antd/es/message/interface";
import type { ModalStaticFunctions } from "antd/es/modal/confirm";
import type { NotificationInstance } from "antd/es/notification/interface";

let message: MessageInstance;
let modal: Omit<ModalStaticFunctions, "warn">;
let notification: NotificationInstance;

const GlobalInteractionComponent = () => {
  const app = App.useApp();
  message = app.message;
  modal = app.modal;
  notification = app.notification;
  return null;
};

export default GlobalInteractionComponent;

export { message, modal, notification };
