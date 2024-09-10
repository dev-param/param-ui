import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addComponentsDir,
  installModule,
} from "@nuxt/kit";
import { configureTailwind } from "./tailwind";
// @ts-ignore
import type { Config } from "tailwindcss";
// Module options TypeScript interface definition
export interface ModuleOptions {
  prefix?: string;
  global?: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "param-ui",
    configKey: "paramUi",
  },
  // Default configuration options of the Nuxt module
  defaults: {
    prefix: "P",
  },
  async setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url);


    _nuxt.hook("tailwindcss:config", (tailwindConfig: Partial<Config>) => {
      configureTailwind(tailwindConfig, resolver);
    });






    await installModule("@nuxt/ui",);
    await installModule("@nuxtjs/tailwindcss");
    
    // _nuxt.options.tailwindcss.configPath = resolver.resolve("./runtime","tailwind.config");
    await installModule("v-wave", {
      color: "rgb(var(--color-primary-DEFAULT) )",
      duration: 0.6,
      initialOpacity: 0.4,
      dissolveDuration: 0.3,
    });

    addComponentsDir({
      path: resolver.resolve("./runtime", "components", "elements"),
      prefix: _options.prefix,
      global: _options.global,
      watch: false,
    });
    addComponentsDir({
      path: resolver.resolve("./runtime", "components", "forms"),
      prefix: _options.prefix,
      global: _options.global,
      watch: false,
    });
  },
});
