import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'pnpm',
  utoopack: {
    provider: {
      process: 'process'
    },
    module: {
      rules: {
        "*.svg": {
          loaders: [
            require.resolve("@svgr/webpack")
          ],
          as: '*.js'
        }
      }
    }
  },
  // mako: {}
});
