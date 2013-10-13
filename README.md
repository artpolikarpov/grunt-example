# Простой пример конфигурации Гранта для склейки стилей и скриптов   в абстрактном сайте
Исходники стилей из папки `styles/` компилируются в файл `www/css/all.css`. Аналогично скрипты — `scripts/` в `www/js/all.js`.

## Установка
Скачайте и разархивируйте проект:
> (https://github.com/artpolikarpov/grunt-example/archive/master.zip)

Установите <a href="http://nodejs.org/">Node.js</a>.

Установите консольную утилиту Гранта, в терминале:
```bash
npm install grunt-cli -g
```

Перейдите в папку этого проекта и установите зависимости:
```bash
cd path/to/grunt-example
npm install
```

## Разработка
Перед началом работы над исходниками запустите слежение за изменениями:
```bash
grunt watch
```

Редактируйте файлы в папках `styles/` и `scripts/`. После каждой сохранённой правки файлы `www/css/all.css` и `www/js/all.js` будут обновляться.

Стили кроме склейки проходят через [Автопрефиксер](https://github.com/ai/autoprefixer), добавляющий актуальные браузерные префиксы ко всем экспериментальным свойствам вроде `box-shadow` и `transition`.

**Стили и скрипты в `www/` не нужно изменять напрямую.**

Заканчивая работу, прервите висящий `grunt watch` и окончательно склейте и минифицируйте файлы одной командой:

```bash
grunt
```

## Продолжение
Читайте большой пост Артёма Сапегина [«Грант 0.4: система сборки для фронтенд-разработчиков»](http://nano.sapegin.ru/all/grunt-0-4), чтобы досконально разобраться в Гранте.

Используйте Грант на здоровье :-)
