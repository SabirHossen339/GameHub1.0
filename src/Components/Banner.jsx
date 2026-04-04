import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Game1 from "../assets/pubg-playerunknowns-battlegrounds-2022-games-5k-6381x3590-7976.jpg"
import Game2 from "../assets/f1-25-878d7.jpg";
import Game3 from "../assets/COD_WW2.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Banner = () => {
  return (
    <div className="">

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        effect="fade"
        loop={true}
        className="h-150"
      >

        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-full">

            <img
              src={Game1}
              className="w-full h-full object-cover"
              alt=""
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-end px-6 md:px-20">
              <div className="max-w-xl text-white">

                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Cyber Battle Arena
                </h1>

                <p className="text-gray-400 mb-6">
                  Enter the futuristic battlefield with high-end graphics and intense multiplayer action.
                </p>
              </div>
            </div>

          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-full">

            <img
              src={Game2}
              className="w-full h-full object-cover"
              alt=""
            />

            <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent"></div>

            <div className="absolute inset-0 flex items-end px-6 md:px-20">
              <div className="max-w-xl text-white">

                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Racing Legends
                </h1>

                <p className="text-gray-400 mb-6">
                  Feel the speed and adrenaline in the ultimate racing experience.
                </p>
              </div>
            </div>

          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative h-full">

            <img
              src={Game3}
              className="w-full h-full object-cover"
              alt=""
            />

            <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent"></div>

            <div className="absolute inset-0 flex items-end px-6 md:px-20">
              <div className="max-w-xl text-white">

                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Warzone Strike
                </h1>

                <p className="text-gray-400 mb-6">
                  Tactical combat meets realistic war simulation. Lead your squad to victory.
                </p>
              </div>
            </div>

          </div>
        </SwiperSlide>

      </Swiper>

    </div>
  );
};

export default Banner;