import spoonKnifeCrossed from "../../assets/icons/spoonKnifeCrossed.svg";
import clock from "../../assets/icons/clock.svg";

const PrepTimeSection = () => {
  const cardItems = [
    {
      imgSrc: spoonKnifeCrossed,
      heading: "yields",
      description: "12 servings",
      descriptionTextColor: "text-primary",
    },
    {
      imgSrc: clock,
      heading: "prep time",
      description: "45 minutes",
    },
    {
      imgSrc: clock,
      heading: "cook time",
      description: "1 hour",
    },
    {
      imgSrc: clock,
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
        }) => (
          <div
            className="flex space-x-1 [&:first-of-type]:basis-full items-center"
            key={heading}
          >
            <img src={imgSrc} alt="" className="w-4 h-4" />

            <div className="flex flex-col">
              <h4 className="uppercase text-[#BDBDBD] font-bold text-[0.5rem]">
                {heading}
              </h4>
              <p
                className={`font-medium text-[0.625rem] ${descriptionTextColor}`}
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