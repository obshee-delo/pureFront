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
    dispatch(backLogo());
  }, [setHLogo]);
  return (
    <div className={` pb-[0px]`}>
      <Header />
      <div className={`h-[100vh] `}></div>
      <div className="bg-[rgb(254,243,229)] z-[3] relative pt-[80px] sm:pt-[120px]">
        <Sooner />
        <Duraction />
        <More />
        <Speakers />
        <FeedBack />
      </div>
      <Footer />
      <MarqueeEl />
    </div>
  );
};

export default Main;
