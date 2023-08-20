import spoonKnifeCrossed from "../../assets/icons/spoonKnifeCrossed.svg";
import clock from "../../assets/icons/clock.svg";

const PrepTimeCard = () => {
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
    <div className="lg:flex flex-col px-11 py-14 space-y-11 basis-[55%] max-w-[13.5rem] rounded-xl shadow-[0_0_20px_0_rgba(0,0,0,0.1)] h-max hidden">
      {cardItems.map(
        ({
          imgSrc,
          heading,
          description,
          descriptionTextColor = "text-[#333333]",
        }) => (
          <div className="flex space-x-3" key={heading}>
            <img src={imgSrc} alt="" className="w-8 h-8" />

            <div className="flex flex-col">
              <h4 className="uppercase text-[#BDBDBD] font-bold text-[0.625rem]">
                {heading}
              </h4>
              <p className={`font-medium text-sm ${descriptionTextColor}`}>
                {description}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default PrepTimeCard;
