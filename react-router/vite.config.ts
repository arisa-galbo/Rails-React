import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  server: {
    proxy: {   //開発用サーバのプロキシを設定
      "/api": {
        target: "http://localhost:3000",
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  }
  //ビルドコマンドを実行されるとReactアプリは変換されて静的なhtmlとしてpublicに配置される
  //開発時だけviteサーバがreactコードをリアルタイムに提供するためポートが異なる
  // railsとreactの間で起こるcors問題を、viteサーバが橋渡しすることで解消
});
