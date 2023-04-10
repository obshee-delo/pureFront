import React from "react";
import { filterContent } from "../common/text";
import AboutCourses from "../components/userPages/AboutCourses";
import Chose from "../common/commonCoponents/Chose";
import Footer from "../common/footer/Footer";
import GeneralHeader from "../common/commonHeader/GeneralHeader";
import { setHLogo, backLogo } from "../redux/checkRegistrationSlice";
import { useAppDispatch } from "../redux/state";
const Course = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(backLogo());
    window.scrollTo({
      top: 0,
    });
  }, [setHLogo]);
  return (
    <div className="text-[#272523] bg-[#fef3e5]">
      <GeneralHeader
        underTitle="Курсы и интенсивы"
        subtitle="Курсы и интенсивы по всем направлениям"
        underTitle2="по всем направлениям"
        nextSubtitle=""
        rv=""
      />
      <AboutCourses />
      <Chose
        data={filterContent}
        title="Выбирай нужное  направление и подходящий курс"
        filter={true}
      />
      <Footer />
    </div>
  );
};

export default Course;
