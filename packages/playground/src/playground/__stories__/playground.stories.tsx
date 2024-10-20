import type { Meta, StoryObj } from "@storybook/react";

import { Playground } from "../playground";

const meta: Meta<typeof Playground> = {
  component: Playground,
  title: "Playground",
};
export default meta;
type Story = StoryObj<typeof Playground>;

const Preview = () => {
  return (
    <div>
      <h1>Preview</h1>
    </div>
  );
};

const story = {
  render: Preview,
};

export const ShowMore: Story = {
  args: {
    type: "more",
    story,
  },
  render: (args) => (
    <>
      <Playground {...args} />
    </>
  ),
};

export const Switch: Story = {
  args: {
    type: "switch",
    story,
  },
  render: (args) => (
    <>
      <Playground {...args} />
    </>
  ),
};
