import React from "react";
import AboutIntensive from "../components/AboutIntensive";
import Btn from "../common/commonCoponents/Btn";
import Footer from "../common/footer/Footer";
import GeneralHeader from "../common/commonHeader/GeneralHeader";
import Price from "../components/intensivePage/Price";
import Questions from "../components/intensivePage/Questions";
import Reason from "../components/intensivePage/Reason";
import Week from "../components/intensivePage/Week";
import FeedBack from "../common/commonCoponents/FeedBack";
import { setHLogo, backLogo } from "../redux/checkRegistrationSlice";
import { useAppDispatch } from "../redux/state";
import { useParams } from "react-router-dom";
import Teachers from "../components/intensivePage/Teachers";
import Wait from "../components/intensivePage/Wait";

const Intensive = () => {
  const { name } = useParams();
  const dispatch = useAppDispatch();
  console.log(name);
  React.useEffect(() => {
    dispatch(backLogo());
  }, [setHLogo]);
  return (
    <div className="text-[#272523] bg-[#fef3e5] relative">
      <GeneralHeader
        // subtitle={name}
        subtitle={name}
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
