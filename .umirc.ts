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
            {
              loader: require.resolve("@svgr/webpack"),
              condition: {
                all: [
                  // Exclude node_modules (similar to excluding non-source files)
                  { not: 'foreign' },
                  // Match JavaScript/TypeScript files
                  { path: /\.[jt]sx?$/ },
                ],
              },
              options: {
                exportType: 'named',
                namedExport: 'ReactComponent',
                ref: true,
                svgo: false,
              }
            }
          ],
          as: '*.js'
        }
      }
    }
  },
});
