// логика по выносу курсов по категориям

import { sdk } from "./sdk";
console.log(1);
export const obshestvoCources = sdk.course
  .findByCategory({
    category: "Обществознание",
  })
  .then((el) => console.log(el));

export const pravoCources = sdk.course
  .findByCategory({ category: "Право" })
  .then((el) => el);
export const historyCources = sdk.course
  .findByCategory({ category: "История" })
  .then((el) => el);
export const russianCources = sdk.course
  .findByCategory({ category: "Русский язык" })
  .then((el) => el);
export const geoCources = sdk.course
  .findByCategory({ category: "География" })
  .then((el) => el);
export const bioCources = sdk.course
  .findByCategory({ category: "Биология" })
  .then((el) => el);
export const ekoCources = sdk.course
  .findByCategory({ category: "Экология" })
  .then((el) => el);
// ХЗ, ВЕРНО ИЛИ НЕТ, НО, ВОЗМОЖНО СПСОСОБ ПОЛУЧЕИЯ ВСЕХ КУРСОВ
export const whole = sdk.course
  .getAll({ fields: ["Обществознание"] })
  .then((el) => el);
