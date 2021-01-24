# enviroment-sample

nuxt.js を使用した product の環境構築を事前にある程度行う事が目的

## Installation

- clone

```bash
$ git clone git@github.com:tsuchiya-kai/nuxt_environment.git
```

## How to

- install

```bash
$ yarn install
```

- ローカル開発

```bash
$ yarn dev
```

- 本番用 buils とサーバーを起動

```bash
$ yarn build
$ yarn start
```

- 静的ファイル作成（production build）

```bash
$ yarn generate
```

- commit

```bash
$ yarn commit
```

- formatting

```bash
## js
$ yarn lint:js:fix

## scss
$ yarn lint:style:fix

## jsとcss両方
$ yarn lint:fix
```

## Contribution

- プロジェクトにコミットするためにまずディレクトリ構成を確認しどこに何のファイルがありどのファイルを更新すればいいのか確認しましょう
