# Добавление изображений в pug

`img(src=require('image-name.jpg'))`

# Добавление svg иконки в pug

`svg use(xlink:href='/assets/svg/sprite.svg#icon-{name}')`

# Добавление svg иконки 'home' в файл стилей \*.scss:

`@include sprite('home');`

или

`background-image: url(map-get($sprites, 'home'));`
