import type { Config } from "@react-router/dev/config";
import { rm, rename } from "node:fs/promises";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,     // SPAモードに変更 サーバーサイドの機能はrails、愚論とはreactが担当
  buildEnd: async () => {
    await rm("../public/react-router",{recursive: true, force: true}) //ビルドの後実行でいいのですか？次回の実行に備えて削除
    await rename("build/client/index.html", "build/client/react-router-index.html")
    //ブラウザから直接アクセスせず、railsのcontroller経由でアクセスしてもらうため
    //publicに入ったファイルはデフォルトではコントローラを経由しない
    // react-router/　へのアクセスが自動でindex.htmlをコントローラより先に返してしまうからこれを回避する
    await rename("build/client", "../public/react-router")  //ビルドして出来上がったファイルをrailsのpublicディレクトリに移動させる
    await rm("build", { recursive: true, force: true})  //ビルドして不要になったファイルを削除
  },
  basename: "/react-router/"  //全てのreactのリンクの先頭に/react-router/がつく。railsのルーティングに対応させる
} satisfies Config;
