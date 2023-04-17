import React from "react";
import Duraction from "../components/mainPage/Duraction";
import FeedBack from "../common/commonCoponents/FeedBack";
import Footer from "../common/footer/Footer";
import Header from "../components//mainPage/Header";
import More from "../components//mainPage/More";
import Sooner from "../components//mainPage/Sooner";
import Speakers from "../components//mainPage/Speakers";
import { setHLogo, backLogo } from "../redux/checkRegistrationSlice";
import { useAppDispatch } from "../redux/state";
import MarqueeEl from "../common/commonCoponents/Marquee";

const Main = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(backLogo()); //МЕТОД ДЛЯ, ТОГО, ЧТОБЫ ОТОБРАЖАТЬ НУЖНЫЙ ЛОГОТИП НА СТРАНИЦЕ
    window.scrollTo({
      top: 0, // ЧТОБЫ ПРИ КЛИКЕ БЫЛ СКРОЛЛ К НАЧАЛУ СТРАНИЦЫ
    });
  }, [setHLogo]);
  return (
    <div className={` pb-[0px]`}>
      <Header />
      <div className={`h-[100vh] `}></div>
      <div className="bg-[rgb(254,243,229)] z-[3] relative pt-[80px] sm:pt-[120px]">
        {/* БЛОК СО СЛАЙДЕРАМИ О БЛИЖАЙШИХ КУРСАХ */}
        <Sooner />
        {/* БЛОК С НАПРАВЛЕНИЯМИ, ТАМ ЖЕ И БУДЕТ ОТРИСОВКА СОЗДАННЫХ КУРСОВ */}
        <Duraction />
        {/* ЗДЕСЬ НУЖНО ОТОБРАЗИТЬ ВИДЕО, НА ДАННЫЙ МОМЕНТ КАРТИНКИ, НО ПРОСТО ВСТАВИТЬ ВИДЕО И СТИЛИ, ЧТОБЫ ОБРЕЗАТЬ */}
        <More />
        {/* СПИКЕРЫ */}
        <Speakers />
        {/* ОТЗЫВЫ */}
        <FeedBack />
      </div>
      {/* ФУТЕР */}
      <Footer />
      {/* Т.К. ШАПКА ФИКСИРОВАННАЯ, ЧТОБЫ НЕ ЗАВИСЕТЬ ОТ ДИСПЛЕЯ, СДЕЛАЛ ПРОКРУТКУ ОТДЕЛЬНЫМ БЛОКОМ  */}
      <MarqueeEl />
    </div>
  );
};

export default Main;
