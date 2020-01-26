import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";
import external from "rollup-plugin-peer-deps-external";
import svgr from "@svgr/rollup";
import url from "rollup-plugin-url";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

process.env.BABEL_ENV = "production";

export default {
  input: "./src/index.ts",

  plugins: [
    peerDepsExternal(),
    resolve({ extensions }),
    commonjs({
      include: "node_modules/**"
    }),
    babel({
      extensions,
      include: ["src/**/*"],
      runtimeHelpers: true,
      presets: [["react-app", { flow: false, typescript: true }]]
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
