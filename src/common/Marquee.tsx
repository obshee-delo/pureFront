import React from "react";
import Marquee from "react-fast-marquee";
import { headerList } from "./text";
type Props = {};

const MarqueeEl = (props: Props) => {
  return (
    <div className="relative bg-[url('./assets/img/marqueeBg.png')] z-10 after:z-10 w-full py-6 after:absolute after:content-bgMarquee after:w-full after:h-full after:left-0 after:top-0">
      <Marquee gradient={false} className="gap-[30px]   left-0">
        {headerList.map((el, i) => (
          <div
            className="py-1 px-4 border border-solid border-black rounded-lg mx-[20px] font-medium"
            key={i}
          >
            {el}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeEl;
