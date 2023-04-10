import React from "react";
import { tab } from "../../common/text";
import Title from "../../common/commonCoponents/Title";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { images } from "../../assets/img";
import { ITabContent } from "../../common/module";
const Speakers: React.FC = () => {
  let count: number = 8;
  let screen = window.screen.width;
  if (screen > 1200) count = 8;
  if (screen < 1200 && screen > 850) count = 6;
  if (screen < 850 && screen > 640) count = 5;
  if (screen < 640) count = 4;
  let [tabC, setTab] = React.useState(tab[0]);
  let space;
  if (screen > 1200) space = 0;
  if (screen < 1200 && screen > 850) space = 10;
  if (screen < 850 && screen > 640) space = 1;
  if (screen < 640) space = 5;
  return (
    <section className="mb-[80px] md:mb-[120px] text-[#272523] block">
      <div className="wc px-[15px]">
        <Title text="Спикеры Общего дела" />
        <div>
          <div className="relative w-full h-[580px] sm:h-[563px] mb-[20px] sm:mb-[30px] md:mb-[40px] lg:mb-[50px] sm:pt-[183px] pl-3 sm:pl-[30px] ">
            <h3 className="z-[1] relative mb-[5px] sm:mb-[20px] text-[24px] sm:text-[28x] md:text-[32px]">
              {tabC.title}
            </h3>
            <p className="text-[16px] sm:text-[22px] z-[1] font-bold max-w-[303px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[402px] mb-1 sm:mb-10 relative pl-[25px]">
              {tabC.textP}
              <img
                src={images.speakerStar1}
                className="absolute left-0 top-2"
                alt=""
              />
            </p>
            <p className="text-[16px] sm:text-[22px] z-[1] font-bold max-w-[303px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[402px] relative pl-[25px]">
              {tabC.text}
              <img
                src={images.speakerStar2}
                className="absolute left-0 top-2"
                alt=""
              />
            </p>
            <img
              className="absolute top-0 left-0 w-full h-full z-[0]"
              src={
                window.innerWidth > 550
                  ? tabC.tabContentImg
                  : tabC.tanMobileContentImg
              }
              alt=""
            />
          </div>
          <div className="flex justify-between">
            <Swiper
              className="min-w-full"
              spaceBetween={space}
              slidesPerView={count}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {tab.map((el: ITabContent, i: number) => (
                <SwiperSlide key={i} className="mx-[0px] md:mx-[1px]">
                  <img
                    className={`cursor-pointer border border-solid rounded-[50%] relative z-10 min-w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[135px] md:h-[135px]       
                    ${el.color === "transparent" ? "border-transparent" : null}
                    ${el.color === "orange" ? "border-[#FC9F7D]" : null}
                    ${el.color === "blue" ? "border-[#7BCDD0]" : null}
                    ${el.color === "pink" ? "border-[#DEC3E4]" : null}
      
                   `}
                    onClick={() => setTab(el)}
                    src={el.tabImg}
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
