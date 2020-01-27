module.exports = {
  stories: ["../src/**/*.stories.(js|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs/register"
  ],
  presets: ["@storybook/addon-docs/react/preset"]
};
