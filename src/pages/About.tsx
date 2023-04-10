import React from "react";
import We from "../components/aboutPage/We";
import GeneralHeader from "../common/commonHeader/GeneralHeader";
import Footer from "../common/footer/Footer";
import Text from "../components/aboutPage/Text";
import { setHLogo, backLogo } from "../redux/checkRegistrationSlice";
import { useAppDispatch } from "../redux/state";
const About: React.FC = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(backLogo());
  }, [setHLogo]);
  return (
    <div className="text-[#272523] bg-[#fef3e5]">
      <GeneralHeader
        rv={"каждому"}
        underTitle="делаем образование доступным"
        subtitle="О нас"
        underTitle2="ОБЩЕЕ ДЕЛО "
      />
      <We />
      <div className="wc px-[15px]">
        <Text />
      </div>

      <Footer />
    </div>
  );
};

export default About;
