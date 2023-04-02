import SocialIcons from "@/components/socialicons";
import Image from "next/image";
import IMAGES from "@/utils/images";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <h1 className="text-center text-2xl sm:text-5xl pt-5 font-semibold font-livvic ">
          Contact with me
        </h1>
        <div className="horizontal-line">
          <div className="top-line"></div>
          <div className="bottom-line"></div>
        </div>
        <div className="grid grid-cols-1 tab:grid-cols-3 py-3">
          <div className="contact-about-area flex flex-col gap-3 px-8 py-10 rounded-3xl">
            <div className="contact-thumbnail rounded-2xl overflow-hidden">
              <Image
                src={IMAGES.contact}
                className="w-full duration-700 hover:scale-110"
                alt=""
              />
            </div>

            <h2 className="font-semibold text-2xl text-white mt-10 font-montserrat">
              Mukhtar Ahmad
            </h2>
            <p> Front end Developer</p>

            <p className="text-sm my-6">
              I am available for freelance work. Connect with me via following
              mail or through Upwork.
            </p>
            <p>
              <strong className=""> Email: </strong>
              <span className="  ">h.mukhtarahmad1@gmail.com</span>
            </p>
            <div>
              <SocialIcons />
            </div>
          </div>

          <div className="px-0 tab:px-8 col-span-2">
            <div className="contact-from-wrapper rounded-2xl flex flex-col gap-6 px-8 py-10 ">
              <div className="flex lg:flex-row flex-col	 gap-8 justify-between">
                <div>
                  <label htmlFor="">
                    YOUR NAME <br />
                    <input type="text" />
                  </label>
                </div>

                <div>
                  <label htmlFor="">
                    YOUR PHONE <br />
                    <input type="text" />
                  </label>
                </div>
              </div>

              <div className="w-full">
                <label htmlFor="">
                  YOUR EMAIL
                  <br /> <input type="email" />
                </label>
              </div>
              <div className="w-full">
                <label htmlFor="">
                  SUBJECT <br /> <input type="email" />
                </label>
              </div>
              <div className="w-full">
                <textarea name=""></textarea>
              </div>
              <button className="w-full py-5 font-medium tracking-wide text-sm rounded-md">
                SEND MESSAGE
                <span className="px-3">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
