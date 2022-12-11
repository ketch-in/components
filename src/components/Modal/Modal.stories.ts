import { Story, Meta } from "@storybook/html";

import { ModalComponentProps } from "./Modal";
import ModalController from ".";

export default {
  title: "Modal",
  argTypes: {
    children: { control: false },
    modalWidth: { type: "number" },
    onClose: { action: "clicked", control: false },
  },
  parameters: {
    docs: {
      page: () => null,
    },
  },
} as Meta;

const Template: Story<ModalComponentProps> = (args) => {
  const root = document.createElement("div");

  const modalController = new ModalController(root, args);
  modalController.add(args);

  return root;
};

function createTextBody(text: string) {
  const p = document.createElement("p");
  p.innerText = text;
  return p;
}

export const Resize = Template.bind({});

Resize.args = {
  modalWidth: 300,
  children: createTextBody("Ketch In은 전제화면만 지원합니다."),
};
