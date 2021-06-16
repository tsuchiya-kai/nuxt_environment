# nuxt_enviroment
nuxt 案件にすぐに対応できるよう環境構築を事前に行っておく

## environment

- node ^14.16.0
- Nuxt ^2.15.2

## How to

- clone

```bash
git clone git@github.com:arsaga-partners/sumune-client.git
cd sumune-client
```

- install

```bash
$ yarn install
```

- ローカル開発

```bash
$ yarn dev
```

- 本番用 build とサーバーを起動

```bash
$ yarn build
$ yarn start
```

- 静的ファイル作成（production build）

```bash
$ yarn generate
```

- commit（推奨）

```bash
$ yarn commit
```

- マージ済みのローカルブランチを削除

```bash
$ yarn branch:delete
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