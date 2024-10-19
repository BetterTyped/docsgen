import React from "react";
import { Preview } from "@storybook/react";
import * as stylex from "@stylexjs/stylex";
import { Theme } from "@docsgen/themes";

const style = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "20px",
  },
});

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <div {...stylex.props(style.container)}>
          <Story />
        </div>
      </>
    ),
  ],
};

export default preview;
