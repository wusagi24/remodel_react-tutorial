# React tutorial by create-react-app

## これは？

facebook社公式のReactプロジェクトスターターコマンド 「 [ **create-react-app** ](https://github.com/facebookincubator/create-react-app) 」 による、私なりの [React の公式チュートリアル](https://facebook.github.io/react/docs/tutorial-ja-JP.html) の写経（というか書き換え？）です。

## 実行

あえて eject せずに、 create-react-app に依存したソースのままにしてありますので、実行には create-react-app コマンドが使えるようにした環境である必要があります。

```bash
$ npm start
```

## コミット

公式チュートリアルに登場するソース（tutorialXX.js）ごとにコミットを作っています。

## サーバプログラム

APIサーバは [公式チュートリアル で用意されているもの](https://github.com/reactjs/react-tutorial) を別にcloneしてきて、外部APIサーバみたいな感じでそのまま使っています。

もともとこのサーバサイドのプログラムはCORS対応してあるようなので、別ドメインになってもそのままで大丈夫です。

ただ、そのままだと create-react-app が立てるサーバとポート番号が被っているので、別のポート番号を指定して起動してあげる必要があります。

```bash
$ git clone https://github.com/reactjs/react-tutorial.git react-tutorial-server
$ cd react-tutorial-server
$ npm install
$ PORT=3001 node server.js
```
