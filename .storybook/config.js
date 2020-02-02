import { configure } from "@storybook/react";
import "antd/dist/antd.css";

configure(require.context("../src", true, /\.stories\.(jsx|mdx|tsx)$/), module);
