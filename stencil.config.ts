import { Config } from "@stencil/core";
import { stylus } from "@stencil/stylus";

export const config: Config = {
  namespace: "component",
  plugins: [stylus()],
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "docs-readme"
    },
    {
      type: "www",
      serviceWorker: null // disable service workers
    }
  ]
};
