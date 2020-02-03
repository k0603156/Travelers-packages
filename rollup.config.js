import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";
import svgr from "@svgr/rollup";
import url from "rollup-plugin-url";
import json from "@rollup/plugin-json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

process.env.BABEL_ENV = "production";

export default {
  input: "./src/index.ts",

  plugins: [
    json(),
    peerDepsExternal(),
    resolve({ extensions }),
    commonjs({
      include: "node_modules/**"
    }),
    babel({
      extensions,
      include: ["src/**/*"],
      runtimeHelpers: true,
      babelrc: false,
      presets: [["react-app", { flow: false, typescript: true }]],
      plugins: [
        [
          require.resolve("babel-plugin-import"),
          { libraryName: "antd", libraryDirectory: "es", style: "css" }
        ]
      ]
    }),
    url(),
    svgr()
  ],
  output: [
    {
      file: pkg.module,
      format: "es"
    }
  ]
};
