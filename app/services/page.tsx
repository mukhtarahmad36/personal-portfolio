import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { serviceCards } from "@/pages-data/serviceCards";

export default function Service() {
  return (
    <div className="container text-center">
      <div className=" my-6">
        <h2 className="text-3xl font-semibold services-heading inline-block text-center">
          Services
        </h2>
        <p className="my-4 text-start md:text-center ">
          I am offering my customers very special services and Solutions.
          <br />
          Here are my main Services :
        </p>
      </div>
      <div className="grid  xs:grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
        {serviceCards.map((item, i) => {
          return (
            <div key={i}>
              <div className="service-card px-4 pt-8">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className=" text-start">
                  <div className="text-center text-4xl">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <h2 className="font-semibold text-center text-xl my-2 lg:text-md ">
                    {item.heading}
                  </h2>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
