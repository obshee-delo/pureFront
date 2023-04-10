import React from "react";
import { getCourse } from "../common/text";
import AboutCourses from "../components/userPages/AboutCourses";
import Chose from "../common/commonCoponents/Chose";
import GeneralHeader from "../common/commonHeader/GeneralHeader";
import Footer from "../common/footer/Footer";
import { setHLogo, backLogo } from "../redux/checkRegistrationSlice";
import { useAppDispatch } from "../redux/state";
import { useParams } from "react-router-dom";
import {
  certainCourceState,
  getCertainCource,
} from "../redux/CertainCourceSlice";
import { useAppSelector } from "./../redux/state";
const CertainCourse: React.FC<any> = () => {
  const { name } = useParams();

  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(backLogo());
    dispatch(getCertainCource(name));
  }, [setHLogo]);
  const dataCource = useAppSelector(certainCourceState);
  return (
    <div className="text-[#272523] bg-[#fef3e5]">
      <GeneralHeader
        // useData={name}
        underTitle="Подготовка к олимпиадам"
        subtitle={name}
        underTitle2="по Обществознанию"
      />

      <AboutCourses />
      <Chose
        filters={false}
        data={getCourse}
        title="Курс или интенсив – выбираешь ты"
        rout={name}
      />
      <Footer />
    </div>
  );
};

export default CertainCourse;
