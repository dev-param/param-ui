import type { Config } from "tailwindcss";
import { type Resolver } from "@nuxt/kit";
import plugin from "tailwindcss/plugin";



export const configureTailwind = (tailwindConfig: Partial<Config>, srcResolver: Resolver) => {
  const runtimeDir = srcResolver.resolve("./runtime");

  // @ts-ignore
  tailwindConfig.content.files.push(
    srcResolver.resolve(runtimeDir, "components/**/*.{vue,mjs,ts}")
  );
}