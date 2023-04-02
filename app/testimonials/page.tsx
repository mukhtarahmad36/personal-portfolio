"use client";
import Image from "next/image";
import IMAGES from "../../utils/images";

import Marquee from "react-fast-marquee";

const Testimonial = () => {
  return (
    <>
      <section className="testimonial-page">
        <div className="container">
          <div className="py-[70px]">
            <div className="text-center">
              <h3 className="text-4xl font-semibold  section-title">
                Happy Client Works
              </h3>
            </div>

            <div>
              <Marquee pauseOnHover gradient={false} className="my-12">
                <div className="client_testimonial">
                  <Image src={IMAGES.review1} alt="" />
                </div>
                <div className="client_testimonial">
                  <Image src={IMAGES.review2} alt="" />
                </div>
                <div className="client_testimonial">
                  <Image src={IMAGES.review3} alt="" />
                </div>
                <div className="client_testimonial">
                  <Image src={IMAGES.review4} alt="" />
                </div>
                <div className="client_testimonial">
                  <Image src={IMAGES.review5} alt="" />
                </div>
                <div className="client_testimonial">
                  <Image src={IMAGES.review6} alt="" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Testimonial;
