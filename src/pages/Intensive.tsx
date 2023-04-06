import React from "react";
import AboutIntensive from "../components/AboutIntensive";
import Btn from "../common/Btn";
import Footer from "../components/Footer";
import GeneralHeader from "../common/GeneralHeader";
import Price from "../components/Price";
import Questions from "../components/Questions";
import Reason from "../components/Reason";
import Teachers from "../components/Teachers";
import Wait from "../components/Wait";
import Week from "../components/Week";
import FeedBack from "../components/FeedBack";
import { setHLogo, backLogo } from "../redux/checkRegistrationSlice";
import { useAppDispatch } from "../redux/state";
const Intensive = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(backLogo());
  }, [setHLogo]);
  return (
    <div className="text-[#272523] bg-[#fef3e5] relative">
      <GeneralHeader
        useData=""
        subtitle="Обществознание"
        nextSubtitle="Интенсив по подготовке к перечневым олимпиадам по обществознанию"
        underTitle="Интенсив по подготовке к перечневым олимпиадам по обществознанию"
        underTitle2="14 ЯНВАРЯ – 14 МАРТА"
        rv=""
        fz={50}
        btn={<Btn text="Приобрести" />}
      />
      <AboutIntensive />
      <Wait />
      <Reason />
      <Teachers />
      <Price />
      <Week />
      <Questions />
      <FeedBack />
      <Footer />
    </div>
  );
};

export default Intensive;
