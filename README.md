# vue-app

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## .vuerc

此项目使用的配置

```json
{
  "useTaobaoRegistry": false,
  "packageManager": "yarn",
  "presets": {
    "vue-app": {
      "useConfigFiles": true,
      "plugins": {
        "@vue/cli-plugin-babel": {},
        "@vue/cli-plugin-router": {
          "historyMode": false
        },
        "@vue/cli-plugin-eslint": {
          "config": "prettier",
          "lintOn": ["save"]
        }
      },
      "vueVersion": "3",
      "cssPreprocessor": "less"
    }
  }
}
```
