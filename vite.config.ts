import build from "@hono/vite-build/cloudflare-pages";
import devServer, { defaultOptions } from "@hono/vite-dev-server";
import cloudflareAdapter from "@hono/vite-dev-server/cloudflare";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

const commonPlugins = [checker({ typescript: true })];

export default defineConfig(({ mode }) => {
  const honoAdaptor = async () => {
    const adp = await cloudflareAdapter();
    return { ...adp, env: { ...adp.env, IS_VITE_DEVSERVER: true } };
  };
  return {
    plugins: [
      ...commonPlugins,
      build({
        entry: "src/webserver/index.tsx",
      }),
      devServer({
        adapter: honoAdaptor,
        entry: "src/webserver/index.tsx",
      }),
    ],
  };
});
