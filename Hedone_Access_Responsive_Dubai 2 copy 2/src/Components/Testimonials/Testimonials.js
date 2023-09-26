import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrStar } from "react-icons/gr";
import glogo from "../../Assets/glogo.png";
import ilogo from "../../Assets/ilogo.png";
import alogo from "../../Assets/alogo.png";

const Testimonials = () => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      style={{
        backgroundAttachment: "fixed",
        backgroundImage: `url('/mainbg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%", // Set width for the slider
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "50px",
      }}
      id="Testimonials"
    >
      <h1 className="uppercase font-bold font-Cinzel text-[36px] sm:text-[24px] xs:text-[16px] text-center text-white mb-5">
        Our Valueable Clients
      </h1>

      <Slider {...settings} className="xl:max-w-[60%] lg:max-w-[60%] md:max-w-[90%] sm:max-w-[90%] xs:max-w-[95%]">
        <div className="w-full mx-auto flex justify-center items-center">
          <p class="font-Montserrat  italic  text-white xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[15px] xs:text-[14px]">
            "I have never heard a -No- with Hedone Access. Whatever you desire, they will find a way to make it happen. It's incredible. Thank you for your great work and effort!"
          </p>

          <div className="flex items-center mt-10 mx-auto w-[100%] justify-center">
            <img
              class="w-10 h-10 rounded-full"
              src={glogo}
              alt="profile picture"
            />
            <div className="ml-5">
              <div className="flex">
                <GrStar className="text-yellow-400" />
                <GrStar className="text-yellow-400" />
                <GrStar className="text-yellow-400" />
                <GrStar className="text-yellow-400" />
                <GrStar className="text-yellow-400" />
              </div>
              <cite class="pr-3 font-medium text-white dark:text-white">
                Mr Giovanni
              </cite>
            </div>
          </div>
        </div>
        <div className="max-w-[80%] mx-auto flex justify-center items-center">
          <p className="italic font-medium left-10 font-Montserrat  text-white text-[16px] tracking-normal">
            "Thank you for taking care of our Business. I truly feel understood and well advised. Everything is handled professionally, confidentially and quickly."
          </p>

          <div className="flex items-center mt-10 mx-auto w-[100%] justify-center">
            <img
              class="w-10 h-10 rounded-full"
              src={ilogo}
              alt="profile picture"
            />
            <div className="ml-5">
              <div className="flex">
                <GrStar className="text-yellow-400" />
                <GrStar className="text-yellow-400" />
                <GrStar className="text-yellow-400" />
                <GrStar className="text-yellow-400" />
                <GrStar className="text-yellow-400" />
              </div>
              <cite class="pr-3 font-medium text-white dark:text-white">
                Mr Ivan
              </cite>
            </div>
          </div>
        </div>
        <div className="max-w-[80%] mx-auto flex justify-center items-center">
          <p className="italic font-medium left-10 font-Montserrat  text-white text-[16px] tracking-normal">
            "Hedone Access is a game-changer! Their creativity and attention to
            detail made my anniversary celebration unforgettable. I'm grateful
            for their service."
          </p>

          <div className="flex items-center mt-10 mx-auto w-[100%] justify-center">
            <img
              class="w-10 h-10 rounded-full"
              src={alogo}
              alt="profile picture"
            />
            <div className="ml-5">
              <div className="flex">
                <GrStar className="text-yellow-400" />
                <GrStar className="text-yellow-400" />
                <GrStar className="text-yellow-400" />
                <GrStar className="text-yellow-400" />
                <GrStar className="text-yellow-400" />
              </div>
              <cite class="pr-3 font-medium text-white dark:text-white">
                Ms Anastasia
              </cite>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;
