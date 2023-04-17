// СТРАНИЦА ПО СОЗДАНИЮ КУРСОВ

import { sdk } from "./sdk";

sdk.course.create({
  id: "obshest1",
  name: "Обществознание",
  category: "Обществознание",
});

sdk.course.create({
  id: "pravo1",
  name: "Право",
  category: "Право",
});

sdk.course.create({
  id: "hist1",
  name: "История",
  category: "История",
});

sdk.course.create({
  id: "russ1",
  name: "Русский язык",
  category: "Русский язык",
});

sdk.course.create({
  id: "geo1",
  name: "География",
  category: "География",
});

sdk.course.create({
  id: "bio1",
  name: "Биология",
  category: "Биология",
});

sdk.course.create({
  id: "eko1",
  name: "Экология",
  category: "Экология",
});
export type CrudModelDemo<T> = { id: string } & T;
