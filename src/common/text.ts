import { images } from "../assets/img";
export const header: {
  none: boolean;
  img: string;
  lastImg: string;
  count: string;
  text: string;
}[] = [
  {
    none: true,
    img: "",
    lastImg: "",
    count: "",
    text: "",
  },
  {
    img: images.star,
    none: false,
    lastImg: "",
    count: "",
    text: "",
  },
  {
    count: "190 +",
    lastImg: "",
    img: "",
    none: false,
    text: "призеров и победителей регионального этапа Всероссийской Олимпиады Школьников",
  },
  {
    none: true,
    lastImg: "",
    img: "",
    count: "",
    text: "",
  },
  {
    lastImg: "",
    count: "7",
    img: "",
    none: false,
    text: "призеров заключительного этапа Всероссийской Олимпиады Школьников",
  },
  {
    count: "60 +",
    lastImg: "",
    none: false,
    text: "дипломантов перечневых олимпиад в олимпиадном сезоне",
    img: "",
  },
  {
    count: "1",
    img: "",
    lastImg: "",
    none: false,
    text: "абсолютный победитель заключительного этапа Всероссийской Олимпиады Школьников",
  },
  {
    count: "1",
    img: "",
    lastImg: "",
    none: false,
    text: "победитель заключительного этапа Всероссийской Олимпиады Школьников",
  },
  {
    lastImg: images.sStar,
    none: false,
    count: "",
    text: "",
    img: "",
  },
];
export const headerList: string[] = [
  "Право",
  "Обществознание",
  "История",
  "Русский Язык",
  "Литература",
  "Биология",
  "Экология",
  "География",
  "Право",
  "Обществознание",
  "История",
  "Русский Язык",
  "Литература",
  "Биология",
  "Экология",
];
export const soonCourse: {
  date: string;
  time: string;
  day: string;
  title: string;
  img: string;
}[] = [
  {
    date: "12.02 – 24.03",
    time: "19:00",
    day: "Пн, Ср, Сб",
    title: "Практикум к Фемиде",
    img: images.c1,
  },
  {
    date: "12.02 – 24.03",
    time: "12:30",
    day: "Суббота",
    title: "Практикум Ломоносов",
    img: images.c1,
  },
  {
    date: "12.02 – 24.03",
    time: "15:00",
    day: "Ср, Вс",
    title: "Практикум к Кутафинской олимпиаде ",
    img: images.c1,
  },
  {
    date: "12.02 – 24.03",
    time: "19:00",
    day: "Пн, Вт, Чт",
    title: "Практикум СПбГУ",
    img: images.c1,
  },
  {
    date: "12.02 – 24.03",
    time: "19:00",
    day: "Пн, Ср, Сб",
    title: "Практикум к Фемиде",
    img: images.c1,
  },
  {
    date: "12.02 – 24.03",
    time: "15:00",
    day: "Ср, Вс",
    title: "Практикум к Кутафинской олимпиаде ",
    img: images.c1,
  },
  {
    date: "12.02 – 24.03",
    time: "19:00",
    day: "Пн, Вт, Чт",
    title: "Практикум СПбГУ",
    img: images.c1,
  },
  {
    date: "12.02 – 24.03",
    time: "19:00",
    day: "Пн, Ср, Сб",
    title: "Практикум к Фемиде",
    img: images.c1,
  },
  {
    date: "12.02 – 24.03",
    time: "19:00",
    day: "Пн, Ср, Сб",
    title: "Практикум к Фемиде",
    img: images.c1,
  },
];
export const duraction = [
  {
    name: "Обществознание",
    color: "blue",
  },
  {
    name: "право",
    color: "blue",
  },
  {
    imgStar: images.durStar,
  },
  {
    name: "История",
    color: "orange",
  },
  {
    name: "Русский Язык",
    color: "pink",
  },
  {
    name: "Литература",
    color: "pink",
  },
  {
    name: "География",
    color: "black",
    img: images.bDur1,
  },
  {
    name: "Биология",
    color: "black",
    img: images.bDur,
  },
  {
    name: "Экология",
    color: "black",
    img: images.bDur,
  },
];
export const more = [
  {
    title: "Открытые школы для студентов и старшеклассников",
    text: "Quam elit luctus vitae sit nulla donec vulputate. Eu quis massa vel sem sed adipiscing ultricies. Sit magna duis nisi orci. ",
    img: images.more1,
    subtitle: "К списку мероприятий",
  },
  {
    title: "Подкаст «Еще не всерос(с)»",
    text: "Подкаст онлайн-школы Общее Дело о поступлении, олимпиадах и не только.",
    img: images.more2,
    subtitle: "Ко всем выпускам",
  },
  {
    title: "Видеолекторий",
    text: "Quam elit luctus vitae sit nulla donec vulputate. Eu quis massa vel sem sed adipiscing ultricies. Sit magna duis nisi orci. ",
    img: images.more3,
    subtitle: "К списку лекций",
  },
];

export const tab = [
  {
    title: "Михаил Гельфанд",
    textP: "Член Европейской Академии",
    text: "Вице-президент по биомедицинским исследованиям Сколковского института науки и технологий",
    tabImg: images.tab1,
    tabContentImg: images.tabContent1,
    color: "transparent",
  },
  {
    title: "Сергей Игоревич",
    textP: "Член Европейской Академии",
    text: "Вице-президент по биомедицинским исследованиям Сколковского института науки и технологий",
    tabImg: images.tab2,
    tabContentImg: images.tabContent2,
    color: "orange",
  },
  {
    title: "Андрей Петрович",
    textP: "Член Европейской Академии",
    text: "Вице-президент по биомедицинским исследованиям Сколковского института науки и технологий",
    tabImg: images.tab3,
    tabContentImg: images.tabContent3,
    color: "blue",
  },
  {
    title: "Иван Иванович",
    textP: "Член Европейской Академии",
    text: "Вице-президент по биомедицинским исследованиям Сколковского института науки и технологий",
    tabImg: images.tab4,
    tabContentImg: images.tabContent4,
    color: "orange",
  },
  {
    title: "Петр Петрович",
    textP: "Член Европейской Академии",
    text: "Вице-президент по биомедицинским исследованиям Сколковского института науки и технологий",
    tabImg: images.tab5,
    tabContentImg: images.tabContent5,
    color: "pink",
  },
  {
    title: "Галина Михайловна",
    textP: "Член Европейской Академии",
    text: "Вице-президент по биомедицинским исследованиям Сколковского института науки и технологий",
    tabImg: images.tab6,
    tabContentImg: images.tabContent6,
    color: "blue",
  },
  {
    title: "Иван Иванович",
    textP: "Член Европейской Академии",
    text: "Вице-президент по биомедицинским исследованиям Сколковского института науки и технологий",
    tabImg: images.tab4,
    tabContentImg: images.tabContent4,
    color: "orange",
  },
  {
    title: "Петр Петрович",
    textP: "Член Европейской Академии",
    text: "Вице-президент по биомедицинским исследованиям Сколковского института науки и технологий",
    tabImg: images.tab5,
    tabContentImg: images.tabContent5,
    color: "pink",
  },
  {
    title: "Галина Михайловна",
    textP: "Член Европейской Академии",
    text: "Вице-президент по биомедицинским исследованиям Сколковского института науки и технологий",
    tabImg: images.tab6,
    tabContentImg: images.tabContent6,
    color: "blue",
  },
  {
    title: "Иван Иванович",
    textP: "Член Европейской Академии",
    text: "Вице-президент по биомедицинским исследованиям Сколковского института науки и технологий",
    tabImg: images.tab4,
    tabContentImg: images.tabContent4,
    color: "orange",
  },
  {
    title: "Петр Петрович",
    textP: "Член Европейской Академии",
    text: "Вице-президент по биомедицинским исследованиям Сколковского института науки и технологий",
    tabImg: images.tab5,
    tabContentImg: images.tabContent5,
    color: "pink",
  },
];
export const feedback = [
  {
    name: "Соня Меркулова",
    subtitle: "Курс по праву, 2022 г.",
    text: `Очень нравится реально дружный коллектив, то, что учителя умеют заинтересовать, дают самый полезный и нужный материал, говорят обо всем честно и открыто. Крутые пробники, практикумы и нескучные, иногда неформальные лекции:) Пытаются дать всё по максимуму, и это отлично получается. Спасибо ❤️`,
    // textIcon: AiFillHeart,
    img: images.feed1,
    color: "pink",
  },
  {
    name: "Ирина Демченко",
    subtitle: "Курс по русскому языку, 2022 г.",
    text: "Замечательная школа для подготовки ко всероссу и перечневым! Системная, грамотная подача материала и его закрепление. Спасибо вам большое!",
    img: images.feed2,
    color: "red",
  },
  {
    name: "Михаил Егоров",
    subtitle: "ПРОШеЛ Курс по истории В 2022 ",
    text: "«Общее дело» - это то, что я хотел получить от онлайн-школы, и даже больше. Внимание к деталям, хорошая организация, проработанная программа, систематизированная подача материала, большое кол-во работ, многоформатность и, конечно, люди, олимпиадное коммьюнити - всё это позволило мне получать настоящее удовольствие при обучении здесь. За полгода я приобрел очень много знаний как в области обществознания, так и касаемо организации самих олимпиад. С замечательными преподавателями, к которым всегда можно обратиться и которые обладают невероятным опытом, можно поговорить и в неформальной обстановке. Сами организаторы и преподаватели сохраняют связь с обучающимся: вы всегда сможете высказать свои предложения и претензии к организации учебного процесса. «Общее дело» даёт все самые нужные знания и уже зарекомендовало себя как эффективная и ответственная онлайн-школа.",
    img: images.feed3,
    color: "blue",
  },
];
export const coursesPlus: { img: string; title: string; text: string }[] = [
  {
    img: images.courseStar,
    title: "",
    text: "",
  },
  {
    img: "",
    title: "РАЗНООБРАЗНЫЙ ФОРАТ ЗАНЯТИЙ",
    text: "Онлайн занятия, интенсивы, круглые столы - все, чтобы сделать обучение разнообразным и более продуктивным!",
  },
  {
    img: "",
    title: "УДОБНОЕ РАСПИСАНИЕ",
    text: "Учиться с нами удобнее, так как все лекции и вебинары доступны в записи для прослушивания в удобное время.",
  },
  {
    img: "",
    title: "КРУТЫЕ  ПЕРПОДАВАТЕЛИ",
    text: "Преподаватлями курсов являются призерыи победители различных этапов олимпиад разного уровня",
  },
];

export const filter = [
  {
    name: "Обществознание",
  },
  {
    name: "право",
  },
  {
    name: "История",
  },
  {
    name: "Русский Язык",
  },
  {
    name: "Литература",
  },
  {
    name: "Биология",
  },
  {
    name: "Экология",
  },
  {
    name: "География",
  },
];
export interface IFilterContent {
  key: string;
  color: string;
  deadline: string;
  desc: string;
  text: string;
  duration: string;
  certainDur: string;
  coast: string;
  numCoast: string;
}
export const filterContent: IFilterContent[] = [
  {
    key: "Обществознание",
    color: "orange",
    deadline: "1 марта – 7 апреля ",
    desc: "Интенсив по подготовке к Региональным этапам и финалам перечневых олимпиад по обществознанию",
    text: "На нашем двухмесячном курсе будет уделено внимание только практическим занятиям. На конкретных примерах вам станет понятна специфика перечневых олимпиад по обществознанию для поступления в лучшие вузы России.",
    duration: "Продолжительность",
    certainDur: "2 месяца",
    coast: "Стоимость",
    numCoast: "от 1 500 руб",
  },
  {
    key: "Обществознание",
    color: "blue",
    deadline: "28 февраля – 13 июня",
    desc: "Курс по обществознанию",
    text: "На нашем двухмесячном курсе будет уделено внимание только практическим занятиям. На конкретных примерах вам станет понятна специфика перечневых олимпиад по обществознанию для поступления в лучшие вузы России.",
    duration: "Продолжительность",
    certainDur: "2 месяца",
    coast: "Стоимость",
    numCoast: "от 1 500 руб",
  },
  {
    key: "Обществознание",
    color: "violet",
    deadline: "26 февраля – 26 апреля",
    desc: "Интенсив по подготовке к перечневым олимпиадам по обществознанию",
    text: "На нашем двухмесячном курсе будет уделено внимание только практическим занятиям. На конкретных примерах вам станет понятна специфика перечневых олимпиад по обществознанию для поступления в лучшие вузы России.",
    duration: "Продолжительность",
    certainDur: "2 месяца",
    coast: "Стоимость",
    numCoast: "от 1 500 руб",
  },
  {
    key: "Обществознание",
    color: "orange",
    deadline: "28 февраля – 13 июня",
    desc: "Курс по обществознанию",
    text: "На нашем двухмесячном курсе будет уделено внимание только практическим занятиям. На конкретных примерах вам станет понятна специфика перечневых олимпиад по обществознанию для поступления в лучшие вузы России.",
    duration: "Продолжительность",
    certainDur: "2 месяца",
    coast: "Стоимость",
    numCoast: "от 1 500 руб",
  },
  {
    key: "Обществознание",
    color: "violet",
    deadline: "26 февраля – 26 апреля",
    desc: "Интенсив по подготовке к перечневым олимпиадам по обществознанию",
    text: "На нашем двухмесячном курсе будет уделено внимание только практическим занятиям. На конкретных примерах вам станет понятна специфика перечневых олимпиад по обществознанию для поступления в лучшие вузы России.",
    duration: "Продолжительность",
    certainDur: "2 месяца",
    coast: "Стоимость",
    numCoast: "от 1 500 руб",
  },
  {
    key: "История",
    color: "violet",
    deadline: " 22 января - августа",
    desc: "куср по истории",
    text: "На нашем двухмесячном курсе будет уделено внимание только практическим занятиям. На конкретных примерах вам станет понятна специфика перечневых олимпиад по обществознанию для поступления в лучшие вузы России.",
    duration: "Продолжительность",
    certainDur: "2 месяца",
    coast: "Стоимость",
    numCoast: "от 1 500 руб",
  },
  {
    key: "Биология",
    color: "blue",
    deadline: "2 месяца",
    desc: "Курс по биологии",
    text: "На нашСтоимостьем двухмесячном курсе будет уделено внимание только практическим занятиям. На конкретных примерах вам станет понятна специфика перечневых олимпиад по обществознанию для поступления в лучшие вузы России.",
    duration: "от 1 500 руб",
    certainDur: "2-4",
    coast: "",
    numCoast: "345",
  },
  {
    key: "Русский Язык",
    color: "violet",
    deadline: " 22 января - августа",
    desc: "Курс по русскому языку",
    text: "На нашем двухмесячном курсе будет уделено внимание только практическим занятиям. На конкретных примерах вам станет понятна специфика перечневых олимпиад по обществознанию для поступления в лучшие вузы России.",
    duration: "Продолжительность",
    certainDur: "2 месяца",
    coast: "Стоимость",
    numCoast: "от 1 500 руб",
  },
  {
    key: "Русский Язык",
    color: "orange",
    deadline: "2 месяца",
    desc: "Курс по русскому языку",
    text: "На нашСтоимостьем двухмесячном курсе будет уделено внимание только практическим занятиям. На конкретных примерах вам станет понятна специфика перечневых олимпиад по обществознанию для поступления в лучшие вузы России.",
    duration: "от 1 500 руб",
    certainDur: "2-4",
    coast: "blue",
    numCoast: "345",
  },
  {
    key: "География",
    color: "violet",
    deadline: "3 месяца",
    desc: "Курс по географии",
    text: "На нашем двухмесячном курсе будет уделено внимание только практическим занятиям. На конкретных примерах вам станет понятна специфика перечневых олимпиад по обществознанию для поступления в лучшие вузы России.",
    duration: "Продолжительность",
    certainDur: "2 месяца",
    coast: "Стоимость",
    numCoast: "от 1 500 руб",
  },
];

export const getCourse = [
  {
    key: "Обществознание",
    color: "orange",
    deadline: "1 марта – 7 апреля ",
    desc: "Интенсив по подготовке к Региональным этапам и финалам перечневых олимпиад по обществознанию",
    text: "На нашем двухмесячном курсе будет уделено внимание только практическим занятиям. На конкретных примерах вам станет понятна специфика перечневых олимпиад по обществознанию для поступления в лучшие вузы России.",
    duration: "Продолжительность",
    certainDur: "2 месяца",
    coast: "Стоимость",
    numCoast: "от 1 500 руб",
  },
  {
    key: "Обществознание",
    color: "blue",
    deadline: "28 февраля – 13 июня",
    desc: "Курс по обществознанию",
    text: "На нашем двухмесячном курсе будет уделено внимание только практическим занятиям. На конкретных примерах вам станет понятна специфика перечневых олимпиад по обществознанию для поступления в лучшие вузы России.",
    duration: "Продолжительность",
    certainDur: "2 месяца",
    coast: "Стоимость",
    numCoast: "от 1 500 руб",
  },
  {
    key: "Обществознание",
    color: "violet",
    deadline: "26 февраля – 26 апреля",
    desc: "Интенсив по подготовке к перечневым олимпиадам по обществознанию",
    text: "На нашем двухмесячном курсе будет уделено внимание только практическим занятиям. На конкретных примерах вам станет понятна специфика перечневых олимпиад по обществознанию для поступления в лучшие вузы России.",
    duration: "Продолжительность",
    certainDur: "2 месяца",
    coast: "Стоимость",
    numCoast: "от 1 500 руб",
  },
];
export const reason = [
  {
    text: "к Высшей Пробе",
    img: images.ready1,
  },
  {
    text: "к олимпиаде «Ломоносов»",
    img: images.ready2,
  },
  {
    text: "к олимпиаде РАНХиГС",
    img: images.ready3,
  },
  {
    text: "к олимпиаде «Ломоносов»",
    img: images.ready2,
  },
  {
    text: "к олимпиаде РАНХиГС",
    img: images.ready3,
  },
];
export const teachers = [
  {
    img: images.teacher1,
    smImg: images.teacher01,
    title: "Руслан Гусейнов",
    text1: "Призер ЗЭ ВсОШ по обществознанию",
    text2: "Призер ВП по политологии",
    text3: "Призер ВП по обществознанию",
  },
  {
    img: images.teacher2,
    smImg: images.teacher02,
    title: "Анастасия Курина",
    text1: "Победитель ЗЭ ВсОШ",
    text2: "Победитель ВП по философии, социологии, обществознанию",
    text3: "",
  },
  {
    img: images.teacher3,
    smImg: images.teacher03,
    title: "Кристина Минина",
    text1: "Двукратный пиризерВсОШ по обществознанию",
    text2: "Победитель ВП по философии",
    text3: "Призер ВП по обществознанию и политологии",
  },
  {
    img: images.teacher4,
    smImg: images.teacher04,
    title: "Даше Серен",
    text1: "Призер ВП по философии",
    text2: "Участник ЗЭ ВсОШ по литературе",
    text3: "Участник ЗЭ ВсОШ по литературе",
  },
  {
    img: images.teacher5,
    smImg: images.teacher05,
    title: "Максим Мицкевич",
    text1: "Двукратный победитель ВП по обществознанию",
    text2: "Победитель ВП по социологии",
    text3: "Призер ВП по политологии",
  },
];
export const price = [
  {
    title: "Один месяц",
    text: "Описание тарифа и того, что в него входит",
    subtext: "Описание тарифа и того, что в него входит",
    price: "3 500р",
  },
  {
    title: "Два месяца",
    text: "Описание тарифа и того, что в него входит",
    subtext:
      "Quam elit luctus vitae sit nulla donec vulputate. Eu quis massa vel sem sed adipiscing ultricies. Sit magna duis nisi orci. ",
    price: "6 500р",
    black: true,
  },
  {
    title: "Доступ к записям всех курсов",
    text: "Описание тарифа и того, что в него входит",
    subtext: "Описание тарифа и того, что в него входит",
    price: "+ 1 500р",
  },
];
export const questions = [
  "Quam elit luctus vitae sit nulla donec vulputate?",
  "Aliquam hendrerit habitant urna sed porta tellus turpis lorem fringilla?",
  "Nisl ultrices scelerisque nisl lacus facilisis felis tincidunt?",
  "Sed in eu fringilla metus?",
  "Arcu sed arcu mattis nibh amet viverra id?",
];

export const week = [
  {
    empty: true,
    day: "ПН",
  },
  {
    day: "ПН",
    data: "06.03",
    title: "Устный тур",
    color: "pink",
    time: "27 февраля - 05 марта",
  },
  {
    day: "ПН",
    data: "13.03",
    title: "Устный тур",
    color: "pink",
    time: "13 марта - 19 марта",
  },
  {
    day: "ПН",
    data: "20.03",
    time: "20 марта - 26 марта",
    black: {
      firstTime: "18:00",
      firstTitle: "Устный тур",
      secondTime: "21:30",
      secondTitle: "Пробник (резерв 1)",
    },
  },
  {
    day: "ПН",
    data: "27.03",
    title: "Устный тур",
    color: "pink",
    time: "27 марта - 02 апреля",
  },
  {
    day: "ВТ",
    data: "28.02",
    title: "Право",
    color: "blue",
    time: "27 февраля - 05 марта",
  },
  {
    day: "ВТ",
    data: "Право",
    title: "",
    color: "white",
  },
  {
    day: "ВТ",
    data: "14.03",
    title: "",
    color: "white",
    time: "13 марта - 19 марта",
  },
  {
    day: "ВТ",
    data: "21.03",
    color: "black",
    time: "20 марта - 26 марта",
    black: {
      firstTime: "18:00",
      firstTitle: "Решение задач по логике",
      secondTime: "21:30",
      secondTitle: "21:30",
    },
  },
  {
    day: "ВТ",
    data: "28.03",
    title: "Решение задач по логике",
    color: "violet",
    time: "27 марта - 02 апреля",
  },
  {
    day: "СР",
    data: "01.03",
    title: "СААТ",
    color: "violet",
    time: "27 февраля - 05 марта",
  },
  {
    day: "СР",
    data: "08.03",
    title: "СААТ",
    color: "violet",
    time: "06 марта - 12 марта",
  },
  {
    day: "СР",
    data: "08.03",
    title: "СААТ",
    color: "violet",
    time: "06 марта - 12 марта",
  },
  {
    day: "СР",
    data: "22.03",
    color: "black",
    empty: true,
    black: {
      firstTime: "18:00",
      firstTitle: "СААТ",
      secondTime: "21:30",
      secondTitle: "Пробник (резерв 3)",
    },
    time: "20 марта - 26 марта",
  },
  {
    day: "СР",
    data: "29.03",
    title: "Мировая история",
    color: "blue",
    time: "27 марта - 02 апреля",
  },
  {
    day: "ЧТ",
    data: "02.03",
    title: "Экономика",
    color: "blue",
    time: "27 февраля - 05 марта",
  },
  {
    day: "ЧТ",
    data: "09.03",
    title: "Экономика",
    color: "blue",
    time: "06 марта - 12 марта",
  },
  {
    day: "ЧТ",
    data: "16.03",
    title: "Экономика",
    color: "blue",
    time: "13 марта - 19 марта",
  },
  {
    day: "ЧТ",
    data: "23.03",
    title: "Экономика",
    color: "blue",
    time: "",
  },
  {
    day: "ЧТ",
    data: "30.03",
    title: "Полит. география",
    color: "blue",
    time: "27 марта - 02 апреля",
  },
  {
    day: "ПТ",
    data: "",
    title: "Полит. география",
    color: "blue",
  },
  {
    day: "ПТ",
    data: "",
    title: "Полит. география",
    color: "blue",
  },
  {
    day: "ПТ",
    data: "17.03",
    color: "black",
    black: {
      firstTime: "18:00",
      firstTitle: "Пробник ( 1 тур)",
      secondTime: "21:30",
      secondTitle: "Право",
    },
    time: "13 марта - 19 марта",
  },
  {
    day: "ПТ",
    data: "24.03",
    title: "Право",
    color: "blue",
    time: "20 марта - 26 марта",
  },
  {
    day: "ПТ",
    data: "24.03",
    title: "Право",
    color: "blue",
    time: "20 марта - 26 марта",
  },
  {
    day: "СБ",
    data: "05.03",
    title: "Современный мир",
    color: "blue",
    time: "27 февраля - 05 марта",
  },
  {
    day: "СБ",
    data: "11.03",
    title: "Статика",
    color: "blue",
    time: "06 марта - 12 марта",
  },
  {
    day: "СБ",
    data: "18.03",
    color: "black",
    time: "13 марта - 19 марта",
    black: {
      firstTime: "11:30",
      firstTitle: "Социология",
      secondTime: "14:00",
      secondTitle: "Пробник ( 2 тур)",
    },
  },
  {
    day: "СБ",
    data: "25.03",
    title: "Мировая история",
    color: "blue",
    time: "20 марта - 26 марта",
  },
  {
    day: "СБ",
    data: "01.04",
    title: "Консультация на тему проведения апелляций",
    color: "pink",
    time: "27 марта - 02 апреля",
  },
  {
    day: "ВС",
    data: "05.03",
    title: "Современный мир",
    color: "blue",
    time: "27 февраля - 05 марта",
  },
  {
    day: "ВС",
    data: "12.03",
    title: "",
    color: "white",
    time: "06 марта - 12 марта",
  },
  {
    day: "ВС",
    data: "19.03",
    color: "black",
    time: "13 марта - 19 марта",
    black: {
      firstTime: "11:30",
      firstTitle: "Современный мир",
      secondTime: "14:00",
      secondTitle: "Пробник (3 тур)",
    },
  },
  {
    day: "ВС",
    data: "26.03",
    title: "Современный мир",
    color: "blue",
    time: "20 марта - 26 марта",
  },
  {
    day: "ВС",
    empty: true,
  },
];
export const userCourses = [
  {
    title:
      "Интенсив к Заключительному этапу Всероссийской олимпиаде школьников по обществознанию",
    text: "На нашем двухмесячном курсе будет уделено внимание только практическим занятиям. На конкретных примерах вам станет понятна специфика перечневых олимпиад по обществознанию для поступления в лучшие вузы России.",
    duration: "2 месяца",
    progress: "0 ",
    status: "Обучение не началось",
    cId: 1,
    longTime: "",
    additional: [
      {
        title: "Блок 1.",
        subtitle: "Право",
        bg: "blue",
        aboutCourse: [],
      },
      {
        title: "Блок 2",
        subtitle: "Экономика",
        bg: "blue",
        aboutCourse: [],
      },
      {
        title: "Блок 3.",
        subtitle: "Социология",
        bg: "blue",
        aboutCourse: [],
      },
      {
        title: "Блок 4.",
        subtitle: "Политология",
        bg: "blue",
        aboutCourse: [],
      },
      {
        title: "Блок 5.",
        subtitle: "Современный мир",
        bg: "blue",
        aboutCourse: [],
      },
      {
        title: "Блок 6.",
        subtitle: "Статика",
        bg: "blue",
        aboutCourse: [],
      },
      {
        title: "Блок 7.",
        subtitle: "Мировая история",
        bg: "blue",
        aboutCourse: [],
      },
      {
        title: "Блок 8.",
        subtitle: "Полит. география",
        bg: "blue",
        aboutCourse: [],
      },
      {
        title: "Блок 9.",
        subtitle: "СААТ",
        bg: "pink",
        aboutCourse: [],
      },
      {
        title: "Блок 10.",
        subtitle: "Устный тур",
        bg: "orange",
        aboutCourse: [],
      },
      {
        title: "Блок 11.",
        subtitle: "Задачи по логике",
        bg: "pink",
        aboutCourse: [],
      },
      {
        title: "Блок 12.",
        subtitle: "Пробники",
        bg: "black",
        aboutCourse: [],
      },
      {
        title: "",
        subtitle: "Консультация",
        bg: "orange",
        aboutCourse: [],
      },
    ],
  },
  {
    title: "Интенсив по подготовке к финалам перечневых олимпиад по биологии",
    text: "Lorem ipsum dolor sit amet consectetur. Placerat gravida ultrices ultricies diam vulputate at. Ac cursus arcu augue turpis enim porta eget scelerisque. Sed neque eu tristique morbi fusce luctus neque eget amet. Donec mauris consectetur vehicula libero integer cursus facilisis libero. Morbi amet tempus aliquam adipiscing maecenas nulla. Est fames ultrices ultricies neque egestas.",
    duration: "4 месяца",
    progress: "75 ",
    status: "Идет обучение",
    cId: 2,
    longTime: "",
    additional: [
      {
        title: "112f",
        subtitle: "",
        aboutCourse: [],
      },
    ],
  },
  {
    title:
      "Интенсив по подготовке к Региональным этапам и финалам перечневых олимпиад по русскому языку",
    text: "На нашем двухмесячном курсе будет уделено внимание только практическим занятиям. На конкретных примерах вам станет понятна специфика перечневых олимпиад по обществознанию для поступления в лучшие вузы России.",
    duration: "2 месяца",
    progress: "98 баллов",
    result: "100",
    cId: 3,
    longTime: "",
    additional: [
      {
        title: "112f",
        subtitle: "",
        aboutCourse: [],
      },
    ],
  },
  {
    title:
      "Интенсив по подготовке к финалам перечневых олимпиад по обществознанию",
    text: "Lorem ipsum dolor sit amet consectetur. Placerat gravida ultrices ultricies diam vulputate at. Ac cursus arcu augue turpis enim porta eget scelerisque. Sed neque eu tristique morbi fusce luctus neque eget amet. Donec mauris consectetur vehicula libero integer cursus facilisis libero. Morbi amet tempus aliquam adipiscing maecenas nulla. Est fames ultrices ultricies neque egestas.",
    duration: "4 месяца",
    progress: "94 Балла",
    result: "86 баллов",
    cId: 4,
    longTime: "100 ",
    additional: [
      {
        title: "112f",
        subtitle: "",
        aboutCourse: [],
      },
    ],
  },
];
export const lessons = [
  {
    data: "02.03 ",
    text: "Тема лекции: Название темы лекции очень длинное",
    status: "done",
  },
  {
    data: "02.03 ",
    text: "Тема лекции: Название темы лекции очень длинное",
    status: "done",
  },
  {
    data: "02.03 ",
    text: "Тема лекции: Название темы лекции очень длинное",
    status: "do",
  },
  {
    data: "02.03 ",
    text: "Тема лекции: Название темы лекции очень длинное",
    status: "willDo",
  },
  {
    data: "02.03 ",
    text: "Тема лекции: Название темы лекции очень длинное",
    status: "willDo",
  },
  {
    data: "02.03 ",
    text: "Тема лекции: Название темы лекции очень длинное",
    status: "willDo",
  },
];
