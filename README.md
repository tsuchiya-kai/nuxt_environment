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
 ```
 .
├── README.md
├── assets
│   ├── README.md
│   └── scss
│       ├── app.scss
│       ├── components
│       │   └── sample.scss
│       ├── elements
│       ├── generic
│       │   ├── _border-box.scss
│       │   ├── _reset.scss
│       │   ├── _root-font-size.scss
│       │   └── _typography.scss
│       ├── objects
│       ├── settings
│       │   ├── _colors.scss
│       │   └── _fonts.scss
│       ├── tools
│       │   └── _mixins.scss
│       └── utilities
│           └── _main.scss
├── commitlint.config.js
├── components
│   ├── Logo.vue
│   └── README.md
├── jest.config.js
├── jsconfig.json
├── layouts
│   ├── README.md
│   └── default.vue
├── middleware
│   └── README.md
├── nuxt.config.js
├── package.json
├── pages
│   ├── README.md
│   └── index.vue
├── plugins
│   └── README.md
├── static
│   ├── README.md
│   └── favicon.ico
├── store
│   └── README.md
├── stylelint.config.js
├── test
│   └── Logo.spec.js
├── tsconfig.json
└── yarn.lock
```
