# Стартовый шаблон для верстки лендингов и многостраничных сайтов

![price-free](https://img.shields.io/badge/price-free-blue.svg?logo=pinboard)

## Создание блока:

`npm run cb -- {имя блока}`

## Добавление блоков на страницу в pug:

`+b.{имя блока}[.имя модификатора][.дополнительные классы]`

## Добавление изображений в pug:

`img(src=require('../blocks/имя_блока/img/{name}.jpg|png|webp|svg|gif'))`

## Добавление svg иконки в pug:

`svg use(xlink:href=require('../blocks/имя_блока/img/{name}.svg').symbol)`

## Добавление изображений в файл стилей:

`background-image: url('img/{name}.jpg|png|webp|svg|gif')`

## Добавление svg иконки в файл стилей:

`background-image: url('img/{name}.svg')`

## Retina для фоновых изображений

`@include retina2x {...}` - @2x

`@include retina3x {...}` - @3x

## Retina c bootstrap media queries

`@include media-breakpoint-down(lg) { @include retina2x {...} }`
