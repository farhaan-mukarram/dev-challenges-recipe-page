import spoonKnifeCrossed from "../../assets/icons/spoonKnifeCrossed.svg";
import clock from "../../assets/icons/clock.svg";

const PrepTimeSection = () => {
  const cardItems = [
    {
      imgSrc: spoonKnifeCrossed,
      alt: "image of a spoon and knife crossed",
      heading: "yields",
      description: "12 servings",
      descriptionTextColor: "text-primary",
    },
    {
      imgSrc: clock,
      alt: "image of an analog clock",
      heading: "prep time",
      description: "45 minutes",
    },
    {
      imgSrc: clock,
      alt: "image of an analog clock",
      heading: "cook time",
      description: "1 hour",
    },
    {
      imgSrc: clock,
      alt: "image of an analog clock",
      heading: "total time",
      description: "7.75 hours",
    },
  ];

  return (
    <div className="flex flex-wrap lg:hidden [&:first-child]:basis-full justify-between gap-y-5">
      {cardItems.map(
        ({
          imgSrc,
          heading,
          description,
          descriptionTextColor = "text-[#333333]",
          alt,
        }) => (
          <div
            className="flex space-x-1 [&:first-of-type]:basis-full items-center"
            key={heading}
          >
            <img src={imgSrc} alt={alt} className="w-4 h-4 md:h-6 md:w-6" />

            <div className="flex flex-col">
              <h4 className="uppercase text-[#BDBDBD] font-bold text-[0.5rem] md:text-[0.625rem]">
                {heading}
              </h4>
              <p
                className={`font-medium text-[0.625rem] md:text-sm ${descriptionTextColor}`}
              >
                {description}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default PrepTimeSection;
