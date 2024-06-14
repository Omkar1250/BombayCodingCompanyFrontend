import React from "react";
import HighlightText from "../common/Homepage/HighlightText";
import CTAButton from "../common/Homepage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "Transforming Ideas into Digital Solutions",
    highlightText: "with Expertise",
    description:
      "At Bombay Coding Company, we empower businesses and entrepreneurs with innovative app development, responsive website solutions, and scalable e-commerce platforms.",
    BtnText: "Discover Our Services",
    BtnLink: "/services",
  },
  {
    order: 1,
    heading: "Customized Solutions for Every Business",
    description:
      "Our tailored development strategies ensure your digital presence meets your specific business goals and customer needs.",
  },
  {
    order: 2,
    heading: "Agile Development Process",
    description:
      "Utilizing agile methodologies, we deliver projects efficiently while adapting to changes and ensuring high-quality results.",
  },
  {
    order: 3,
    heading: "Secure and Scalable E-commerce Solutions",
    description:
      "Build robust online stores with our secure e-commerce solutions designed to enhance user experience and drive sales.",
  },
  {
    order: 4,
    heading: "Expertise in App Development",
    description:
      "From concept to deployment, our team excels in creating user-friendly and innovative mobile applications tailored to your business needs.",
  },
  {
    order: 5,
    heading: "Responsive Web Design",
    description:
      "Craft engaging websites that captivate your audience and elevate your brand presence across all devices and platforms.",
  },
];

const LearningGrid = () => {
  return (
    <div className="grid mx-auto w-full max-w-[1100px] grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 bg-offwhite ">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`bg-bgblue text-white p-6 rounded-lg ${
              i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
            }`}
          >
            <h2 className="text-2xl lg:text-3xl font-semibold mb-2">
              {card.heading}{" "}
              {card.highlightText && (
                <HighlightText text={card.highlightText} />
              )}
            </h2>
            <p className="text-lg lg:text-base font-medium mb-4">
              {card.description}
            </p>
            {card.BtnText && (
              <div className="mt-auto">
                <CTAButton active={true} linkto={card.BtnLink}>
                  {card.BtnText}
                </CTAButton>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;
