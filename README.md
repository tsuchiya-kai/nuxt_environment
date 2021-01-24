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
├── .nuxt
│   ├── App.js
│   ├── client.js
│   ├── components
│   │   ├── index.js
│   │   ├── nuxt-build-indicator.vue
│   │   ├── nuxt-child.js
│   │   ├── nuxt-error.vue
│   │   ├── nuxt-link.client.js
│   │   ├── nuxt-link.server.js
│   │   ├── nuxt-loading.vue
│   │   ├── nuxt.js
│   │   └── plugin.js
│   ├── empty.js
│   ├── index.js
│   ├── jsonp.js
│   ├── loading.html
│   ├── middleware.js
│   ├── mixins
│   │   ├── fetch.client.js
│   │   └── fetch.server.js
│   ├── router.js
│   ├── router.scrollBehavior.js
│   ├── routes.json
│   ├── server.js
│   ├── utils.js
│   ├── vetur
│   │   └── tags.json
│   └── views
│       ├── app.template.html
│       └── error.html
├── assets
│   ├── README.md
│   └── scss
│       ├── app.scss //entory point
│       ├── components
│       ├── elements
│       ├── generic
│       ├── objects
│       ├── settings
│       ├── tools
│       └── utilities
├── components
├── layouts
│   └── default.vue
├── middleware
├── pages
│   └── index.vue
├── plugins
├── static
├── store
├── test
│   └── Logo.spec.js
├── .vscode
│   └── settings.json
├── .babelrc
├── .czrc
├── .editorconfig
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── commitlint.config.js
├── stylelint.config.js
├── jest.config.js
├── jsconfig.json
├── nuxt.config.js
├── tsconfig.json
├── package.json
├── yarn.lock
└── README.md
```
