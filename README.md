# Стартовый шаблон для верстки лендингов и многостраничных сайтов

[![webpack](https://img.shields.io/badge/Webpack-^4.29.1-blue.svg)](https://github.com/webpack/webpack)
[![sass](https://img.shields.io/badge/Sass-^1.3.0-blue.svg)](https://github.com/sass/sass)
[![pug](https://img.shields.io/badge/Pug-^2.0.3-blue.svg)](https://github.com/pugjs)
[![typescript](https://img.shields.io/badge/TypeScript-^3.3.1-blue.svg)](https://github.com/Microsoft/TypeScript)

## Варианты запуска:

- `npm run build` - сборка проекта
- `npm run dev` - запуск сервера для локальной разработки

## Структура проекта:

```
.
├── api
├── src
├── webpack
├── .browserlistrc
├── .editorconfig
├── .gitignore
├── .htaccess
├── .prerttierrc
├── .stylelintrc
├── composer.json
├── create-block.ts
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tsconfig.json
├── tslint.json
└── webpack.config.json
```

### Папка api

```
api
├── vendor  - папка с зависимостями composer
└── mail    - скрипт отправки писем
```

Предназначена для написания backend приложения.

### Папка src

```
src
├── blocks
│   ├── main-nav
│   │   ├── img
│   │   ├── data.json
│   │   ├── index.pug
│   │   ├── index.scss
│   │   └── index.ts
│   ├── page-footer
│   ├── page-header
│   └── page-main
├── favicon
│   └── favicon.png
├── fonts
│   └── montserrat
│       └── montserrat-regular
│           ├── montserrat-regular.woff
│           └── montserrat-regular.woff2
├── pages
│   └── index.pug
├── pug
│   ├── layouts
│   │   └── index.pug
│   └── mixins
│       └── block.pug
└── scss
    ├── common
    │   ├── fonts.scss
    │   └── scaffolding.scss
    ├── mixins
    │   ├── font-face.scss
    │   ├── retina2x.scss
    │   └── retina3x.scss
    ├── variables
    │   ├── colors.scss
    │   └── fonts.scss
    ├── vendors
    │   └── index.scss
    └── index.scss
```

Предназначена для написания frontend приложения.
Страницы из папки pages собираются из блоков в папке blocks через mixin b:

Пример 1: добавление блока "main-nav"  
`+b.main-nav`

Пример 2: добавление блока "main-nav" с дополнительными классами "main-nav--fixed" и "header\_\_nav"  
`+b.main-nav.main-nav--fixed.header__nav`

#### Создание блока:

- `npm run cb -- {имя блока}` - создание блока

Например создание блока c именем "slider" -  
`npm run cb -- slider`

Контент из файла data.json блока доступен в шаблоне через переменную data.

#### Добавление изображений в блок:

- `img(src=require('{имя блока}/img/{имя изображения}.jpg|png|webp|svg|gif') alt='')`

Например добавление изображения "burger.jpg" в блок "main-nav" -  
`img(src=require('main-nav/img/burger.jpg') alt='burger')`

#### Добавление svg иконки в блок:

- `svg`  
  &nbsp;&nbsp;&nbsp;&nbsp;`use(xlink:href=require('{имя блока}/img/{имя иконки}.svg').symbol)`

Например добавление svg иконки "phone.svg" в блок "main-nav" -  
`svg`  
&nbsp;&nbsp;&nbsp;&nbsp;`use(xlink:href=require('main-nav/img/phone.svg').symbol)`

#### Добавление изображений в файл стилей блока:

- `background-image: url('img/{имя изображения}.jpg|png|webp|svg|gif')`

Например добавление изображения "header-bg.jpg" в блок "main-nav"-

`background-image: url('img/header-bg.jpg')`

#### Добавление svg иконки в файл стилей блока:

- `background-image: url('img/{name}.svg')`

Например добавление svg иконки "phone.svg" в блок "main-nav"-  
`background-image: url('img/phone.svg')`

#### Retina для фоновых изображений

- `@include retina2x {...}` - @2x

- `@include retina3x {...}` - @3x

#### Retina c bootstrap media queries

- `@include media-breakpoint-down({breakpoint}) { @include retina2x {...} }`

Например изменение двойной ретины на брейкпоинте "lg" -  
`@include media-breakpoint-down(lg) { @include retina2x {...} }`
