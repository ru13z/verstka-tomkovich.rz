import replace from "gulp-replace"; // пошук та заміна
import plumber from "gulp-plumber"; // Обробка помилок
import notify from "gulp-notify"; // Повідомленя (підказки)
import browsersync from "browser-sync"; // Локальний сервер
import newer from "gulp-newer"; // Перевірка обновлення
import ifPlugin from "gulp-if"; // Умовне ветвление


// експортуємо обєкт
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin
}